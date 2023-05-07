import { Box, Divider, Text, useColorModeValue } from "@chakra-ui/react";

const Course = (props) => {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.500")}
      borderRadius="3xl"
      w={["90vw", "60vw"]}
          py={1}
          px={4}
    >
      <Text as="b" fontSize="1.5rem" >
        {props.heading}
      </Text>
      <Divider
        borderWidth={2}
        borderColor={useColorModeValue("white", "#1a202c")}
      />
      <Text fontSize="1rem" py={2}>
        {props.about}
      </Text>
    </Box>
  );
};

export default Course;
