import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Flex padding={5}>
      <Link to="/">
        <Text fontSize={20} fontWeight="bold">
          Meu CEP
        </Text>
      </Link>

      <Spacer />

      <Link to="/historico">
        <Text fontSize={16} color="GrayText">
          Histórico
        </Text>
      </Link>
    </Flex>
  );
}
