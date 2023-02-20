import { Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import DarkModeSwitch from "./DarkModeSwitch";

const PokeContainer = ({ children }) => {
  const bgColor = useColorModeValue("white", "#171717");
  const navHoverBg = useColorModeValue("gray.600", "gray.300");
  const color = useColorModeValue("black", "white");

  const StickyNav = styled(Flex)`
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickyNav
        as="nav"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxW="800px"
        minW="356px"
        w="100%"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg }}
            >
              Home
            </Button>
          </NextLink>
        </Box>
        <DarkModeSwitch />
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor}
        color={color}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default PokeContainer;
