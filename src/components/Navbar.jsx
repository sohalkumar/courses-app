import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      bg={useColorModeValue("blue.100", "blue.800")}
      spacing="auto"
      px={["0.75rem", "10rem"]}
      py="3"
    >
      <Text as="b" fontSize={["2xl", "4xl"]}>
        <Link to="/">Shiksha Mitra</Link>
      </Text>
      <HStack>
        <Box display={["none", "inline-block"]}>
          <Link to="all-courses">
            <Button>All Courses</Button>
          </Link>
          <Link to="my-courses">
            <Button>My Courses</Button>
          </Link>
          <Link to="profile">
            <Button isDisabled>Profile</Button>
          </Link>
        </Box>

        <Button
          onClick={toggleColorMode}
          color={useColorModeValue("blue.400", "orange.400")}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
