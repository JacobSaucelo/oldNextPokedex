import { Box, Container, Heading, HStack, Progress } from "@chakra-ui/react";
import React from "react";

const Stats = ({ stats, types }) => {
  return (
    <Box w="full" my={5}>
      <Heading>Stats</Heading>
      <Container>
        {stats.map((stat, index) => (
          <Box key={index}>
            <HStack justify="space-between">
              <Heading fontSize="lg" textTransform="capitalize">
                {stat.stat.name}
              </Heading>
              <Heading fontSize="lg">{stat.base_stat}</Heading>
            </HStack>

            <Progress
              colorScheme={`${types[0].type.name}`}
              value={stat.base_stat}
              hasStripe
              isAnimated
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Stats;
