import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Container, Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import CEPInput from "../components/CEPInput";

export default function Home() {
  const [cep, setCEP] = useState("");

  function handleCEPChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCEP(e.target.value);
  }

  return (
    <Container textAlign="center">
      <Text fontWeight="bold" fontSize={54}>
        MeuCEP
      </Text>
      <Text fontSize={18}>
        Encontre informações de um determinado CEP como: cidade, estado e DDD.
      </Text>

      <Flex marginY="12">
        <CEPInput
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
          value={cep}
          onChange={handleCEPChange}
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
