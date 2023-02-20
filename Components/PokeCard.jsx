import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Spinner,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const PokeCard = ({ pokemons }) => {
  const [pokemonContainer, setPokemonContainer] = useState(pokemons);
  const [offset, setOffset] = useState(21);
  const [limit, setLimit] = useState(offset + 20);

  const fetchMore = () => {
    for (offset; offset < limit; offset++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${offset}`).then((res) => {
        const { "official-artwork": official } = res.data.sprites.other;
        const minData = {
          id: res.data.id,
          name: res.data.name,
          sprites:
            res.data.sprites.other.dream_world.front_default ??
            official.front_default,
          types: res.data.types,
        };
        setPokemonContainer((prevState) => [...prevState, minData]);
      });
    }
    setOffset((prevState) => prevState + 20);
    setLimit((prevState) => prevState + 20);
  };

  return (
    <InfiniteScroll
      dataLength={pokemonContainer.length}
      next={fetchMore}
      hasMore={true}
      loader={
        <Center m={10}>
          <Spinner size="xl" color="red.500" />
        </Center>
      }
      endMessage={<h1>fin...</h1>}
      style={{ overflow: "hidden" }}
    >
      <SimpleGrid minChildWidth="150px" spacing={5} w="full">
        {pokemonContainer.map((pokemon) => (
          <Box w="150" borderRadius={12} p={3} boxShadow="md" key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <VStack>
                  <Image
                    src={pokemon.sprites}
                    height={100}
                    width={100}
                    alt={pokemon.name}
                  />
                  <Heading
                    fontSize="2xl"
                    fontWeight="semibold"
                    textTransform="capitalize"
                  >
                    {pokemon.name}
                  </Heading>
                  <Heading color="grey" fontSize="md">
                    #{pokemon.id}
                  </Heading>
                  <HStack>
                    {pokemon.types.map((type) => (
                      <Box
                        borderRadius="6"
                        color="white"
                        p="2px"
                        fontSize="sm"
                        boxShadow="0px 1px rgb(48,48,48)"
                        bg={`${type.type.name}.500`}
                        key={type.slot}
                      >
                        <Text textTransform="capitalize">{type.type.name}</Text>
                      </Box>
                    ))}
                  </HStack>
                </VStack>
              </a>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default PokeCard;
