import { Text, VStack } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <VStack mt="30vh" spacing="2rem">
        <Text as="b" fontSize="3rem">
          Oops!
        </Text>
        <Text fontSize="1.75rem">Sorry, an unexpected error has occurred.</Text>
        <Text as="i" opacity="70%" fontSize="1.5rem">
          {error.statusText || error.message}
        </Text>
      </VStack>
    </>
  );
}
