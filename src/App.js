import { Flex, Heading, VStack } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="#2d3e50">
          Meta-U
        </Heading>
      </Flex>
      <IconButton
        ml={8}
        icon={isDark ? <FaMoon /> : <FaSun />}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
    </VStack>
  );
}

export default App;
