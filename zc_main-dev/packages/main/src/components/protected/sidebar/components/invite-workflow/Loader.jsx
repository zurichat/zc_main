import React from "react";
import { Container, Text, Spinner } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Container
      p={10}
      m={6}
      maxW="container.xl"
      centerContent
      data-cy="loading_spinner"
    >
      <Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="green.100"
        color="green.500"
        size="xl"
      />
      <Text
        color="black.300"
        fontSize="lg"
        // onClick={loader}
      >
        Sending Invites...
      </Text>
    </Container>
  );
};
