import { Box, Container } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import PokeCard from "../Components/PokeCard";
import PokeContainer from "../Components/PokeContainer";
import Search from "../Components/Search";

export default function Home({ pokemons }) {
  return (
    <Box>
      <PokeContainer>
        <Search />
        <PokeCard pokemons={pokemons} />
      </PokeContainer>
    </Box>
  );
}

export const getStaticProps = async () => {
  const getPokemon = (idx) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${idx}/`)
      .then((res) => res.data);
  };

  let pokeContainer = [];
  for (let i = 1; i <= 20; i++) {
    let pokemon = await getPokemon(i);
    pokeContainer.push(pokemon);
  }

  const minData = pokeContainer.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      sprites: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    };
  });

  return {
    props: {
      pokemons: minData,
    },
  };
};
