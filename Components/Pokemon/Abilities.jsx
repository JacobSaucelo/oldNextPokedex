import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Abilities = ({ abilities }) => {
  return (
    <Box justify="flex-start" w="full" my={5}>
      <Heading>Abilities</Heading>
      <Container>
        {abilities.map((ability) => (
          <HStack key={ability.slot}>
            <Image src="/pbIcon.png" height={20} width={20} />
            <Text size="md">Slot {ability.slot}</Text>
            <Heading size="md" textTransform="capitalize">
              {ability.ability.name}
            </Heading>
          </HStack>
        ))}
      </Container>
    </Box>
  );
};

export default Abilities;
