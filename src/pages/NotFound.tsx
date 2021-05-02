import { Image } from "@chakra-ui/image";
import { Container, Flex, Text } from "@chakra-ui/layout";

export default function NotFound() {
  return (
    <Container textAlign="center" maxW="container.md">
      <Text variant="title">MeuCEP</Text>

      <Flex
        justifyContent="center"
        bgGradient="radial(50% 48%, #402285, #121214)"
      >
        <Image src="/assets/404.svg" alt="Erro 404 ilustrado" />
      </Flex>
    </Container>
  );
}
