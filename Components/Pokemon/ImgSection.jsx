import { VStack, Heading, Flex, Container, Box } from "@chakra-ui/react";
import Image from "next/image";

const ImgSection = ({ images }) => {
  const picsContainer = [];
  const handlePics = (pic) => {
    if (pic !== null) {
      picsContainer.push(pic);
    }
  };
  return (
    <Box w="full" my={5} justify="flex-start">
      <Heading>Images</Heading>
      <Container>
        <Flex wrap="wrap">
          {Object.entries(images).map((val) => handlePics(val[1]))}
          {picsContainer &&
            picsContainer.map((pic, index) => (
              <Image
                src={pic}
                height="80"
                width="80"
                key={index}
                alt="sprites"
              />
            ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default ImgSection;
