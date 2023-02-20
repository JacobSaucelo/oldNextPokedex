import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import pokemons from "../config/pokedex.json";

const Search = () => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    const resultsContainer = [];
    if (value.length >= 3) {
      for (const pokemon of pokemons) {
        if (resultsContainer.length >= 5) break;
        const match = pokemon.name.english
          .toLowerCase()
          .startsWith(value.toLowerCase());
        if (match) {
          const minData = {
            id: pokemon.id,
            name: pokemon.name.english,
            type: pokemon.type,
          };
          resultsContainer.push(minData);
        }
      }
    }
    return setResults(resultsContainer);
  };

  return (
    <Box m={10}>
      <Input
        type="text"
        value={query}
        p={7}
        placeholder="Search your pokemon"
        onChange={handleChange}
      />

      {results &&
        results.map((pokemon) => (
          <Flex justify="space-between" key={pokemon.id}>
            <HStack>
              <Heading fontSize={"lg"}>{pokemon.name}</Heading>
              <Text>#{pokemon.id}</Text>
            </HStack>
            <HStack>
              {pokemon.type.map((types) => (
                <Heading fontSize={"lg"} key={types}>
                  {types}
                </Heading>
              ))}
            </HStack>
          </Flex>
        ))}
    </Box>
  );
};

export default Search;

//todo    IMPLEMENT SHARP FOR IMAGE OPTIMIZATION
