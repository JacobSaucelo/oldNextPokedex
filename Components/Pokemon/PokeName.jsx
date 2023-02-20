import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";

const PokeName = ({ sprites, name, id, types, exp, height, weight }) => {
  return (
    <VStack w="full" mb="10">
      <Flex w="full" flexDirection="column">
        <Box bg={`${types[0].type.name}.500`} h="180" overflow="hidden">
          <Link href="/">
            <a>back</a>
          </Link>
          <Box transform="rotate(35deg)" opacity="60%">
            <Image src="/pkball.png" height={250} width={250} alt="pokeball" />
          </Box>
        </Box>
        <Box mt="-100">
          <Center>
            <Image src={sprites} height="150" width="150" alt="sprite look" />
          </Center>
        </Box>
      </Flex>
      <Heading size="xl" textTransform="capitalize">
        {name}
      </Heading>
      <Heading size="sm" color="grey">
        #{id}
      </Heading>
      <HStack>
        {types.map((type) => (
          <Box
            borderRadius="4"
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
      <HStack spacing={5}>
        <VStack>
          <Heading size="sm">{exp} exp</Heading>
          <Divider />
          <Text>Base exp</Text>
        </VStack>
        <VStack>
          <Heading size="sm">{height * 10}cm</Heading>
          <Divider />
          <Text>Height</Text>
        </VStack>
        <VStack>
          <Heading size="sm">{weight / 10}kg</Heading>
          <Divider />
          <Text>Weight</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default PokeName;
