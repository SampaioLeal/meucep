import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { useState } from "react";
import { useParams } from "react-router";
import CEPInput from "../components/CEPInput";

export default function CEPInfo() {
  const { cep } = useParams<{ cep: string }>();
  const [newCep, setNewCEP] = useState("");

  const cepInfo = {
    cidade: "Teresina",
    estado: "PI",
    bairro: "Cristo Rei",
    logradouro: "Rosa dos Ventos",
    complemento: "Rosa dos Ventos",
    ddd: 86,
  };

  function handleCEPChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewCEP(e.target.value);
  }

  return (
    <Container maxW="container.lg">
      <Text fontWeight="bold" fontSize={54} textAlign="center">
        {cep}
      </Text>
      <Wrap justify="center" marginY="12" spacing={4}>
        <WrapItem>
          <Box textAlign="start" bg="#1E2023" borderRadius={10} w="100%" p={4}>
            <Text fontWeight="bold" color="#8257E6" fontSize={18}>
              Cidade
            </Text>
            <Text fontWeight="bold" fontSize={30}>
              {cepInfo.cidade}
            </Text>
          </Box>
        </WrapItem>

        <WrapItem>
          <Box textAlign="start" bg="#1E2023" borderRadius={10} w="100%" p={4}>
            <Text fontWeight="bold" color="#8257E6" fontSize={18}>
              Estado
            </Text>
            <Text fontWeight="bold" fontSize={30}>
              {cepInfo.estado}
            </Text>
          </Box>
        </WrapItem>

        <WrapItem>
          <Box textAlign="start" bg="#1E2023" borderRadius={10} w="100%" p={4}>
            <Text fontWeight="bold" color="#8257E6" fontSize={18}>
              Bairro
            </Text>
            <Text fontWeight="bold" fontSize={30}>
              {cepInfo.bairro}
            </Text>
          </Box>
        </WrapItem>

        <WrapItem>
          <Box textAlign="start" bg="#1E2023" borderRadius={10} w="100%" p={4}>
            <Text fontWeight="bold" color="#8257E6" fontSize={18}>
              Logradouro
            </Text>
            <Text fontWeight="bold" fontSize={30}>
              {cepInfo.logradouro}
            </Text>
          </Box>
        </WrapItem>

        <WrapItem>
          <Box textAlign="start" bg="#1E2023" borderRadius={10} w="100%" p={4}>
            <Text fontWeight="bold" color="#8257E6" fontSize={18}>
              Complemento
            </Text>
            <Text fontWeight="bold" fontSize={30}>
              {cepInfo.complemento}
            </Text>
          </Box>
        </WrapItem>

        <WrapItem>
          <Box textAlign="start" bg="#1E2023" borderRadius={10} w="100%" p={4}>
            <Text fontWeight="bold" color="#8257E6" fontSize={18}>
              DDD
            </Text>
            <Text fontWeight="bold" fontSize={30}>
              {cepInfo.ddd}
            </Text>
          </Box>
        </WrapItem>
      </Wrap>

      <Container>
        <Text fontWeight="bold" fontSize={18}>
          Não era o que estava procurando?
        </Text>

        <Flex marginY={2}>
          <CEPInput
            borderBottomRightRadius={0}
            borderTopRightRadius={0}
            value={newCep}
            onChange={handleCEPChange}
          />
          <Button
            borderBottomLeftRadius={0}
            borderTopLeftRadius={0}
            // isLoading
            bgColor="#8257E6"
            size="lg"
            _hover={{
              backgroundColor: "#6641bd",
            }}
            _active={{
              backgroundColor: "#4a2e8b",
            }}
            _focus={{}}
          >
            Pesquisar
          </Button>
        </Flex>
      </Container>
    </Container>
  );
}
