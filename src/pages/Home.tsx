import { Image } from "@chakra-ui/image";
import { Container, Flex, Text } from "@chakra-ui/layout";
import CEPInput from "../components/CEPInput";

export default function Home() {
  return (
    <Container textAlign="center">
      <Text variant="title">MeuCEP</Text>
      <Text variant="description">
        Encontre informações de um determinado CEP (Código de Endereçamento
        Postal).
      </Text>

      <Flex marginY={10}>
        <CEPInput />
      </Flex>

      <Flex
        justifyContent="center"
        bgGradient="radial(50% 48%, #402285, #121214)"
      >
        <Image src="/assets/gps.svg" alt="GPS com uma pessoa ilustrados" />
      </Flex>
    </Container>
  );
}
