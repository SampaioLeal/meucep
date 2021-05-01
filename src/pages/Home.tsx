import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Container, Flex, Text } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Container textAlign="center">
      <Text fontWeight="bold" fontSize={54}>
        MeuCEP
      </Text>
      <Text fontSize={18}>
        Encontre informações de um determinado CEP como: cidade, estado e DDD.
      </Text>

      <Flex marginY="12">
        <Input
          // isInvalid
          focusBorderColor="#8257E6"
          errorBorderColor="crimson"
          variant="filled"
          size="lg"
          placeholder="Digite um CEP"
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
        />
        <Button
          borderBottomLeftRadius={0}
          borderTopLeftRadius={0}
          // isLoading
          bgColor="#8257E6"
          _hover={{
            backgroundColor: "#6641bd",
          }}
          size="lg"
        >
          Button
        </Button>
      </Flex>

      <Flex>
        <Image src="/assets/mapa.svg" alt="Mapa ilustrado" />
        <Image src="/assets/gps.svg" alt="GPS com uma pessoa ilustrados" />
      </Flex>
    </Container>
  );
}
