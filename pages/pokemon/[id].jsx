import { Box, Center, Container, Divider, VStack } from "@chakra-ui/react";
import axios from "axios";
import Abilities from "../../Components/Pokemon/Abilities";
import ImgSection from "../../Components/Pokemon/ImgSection";
import PokeName from "../../Components/Pokemon/PokeName";
import Stats from "../../Components/Pokemon/Stats";

const Pokemon = ({ pokemon }) => {
  const {
    name,
    exp,
    id,
    height,
    weight,
    sprites,
    images,
    abilities,
    stats,
    types,
  } = pokemon;

  return (
    <Center>
      <VStack w="container.sm" px={4}>
        <PokeName
          sprites={sprites}
          name={name}
          id={id}
          types={types}
          exp={exp}
          height={height}
          weight={weight}
        />
        <Container>
          <Divider />
          <Abilities abilities={abilities} types={types} />
          <Divider />
          <Stats stats={stats} types={types} />
          <Divider />
          <ImgSection images={images} types={types} />
        </Container>
      </VStack>
    </Center>
  );
};

export default Pokemon;

export const getServerSideProps = async (context) => {
  const pokemon = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${context.params.id}`)
    .then((res) => res.data)
    .then((pokemon) => {
      const { "generation-v": genV } = pokemon.sprites.versions;
      const { "black-white": bnw } = genV;
      const { "official-artwork": official } = pokemon.sprites.other;

      const minData = {
        id: pokemon.id,
        exp: pokemon.base_experience,
        height: pokemon.height,
        weight: pokemon.weight,
        name: pokemon.name,
        sprites:
          pokemon.sprites.other.dream_world.front_default ??
          official.front_default,
        images: bnw.animated.back_default ? bnw.animated : official,
        abilities: pokemon.abilities,
        stats: pokemon.stats,
        types: pokemon.types,
      };
      return minData;
    });

  return {
    props: {
      pokemon,
    },
  };
};
