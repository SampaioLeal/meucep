import { Box, Container, Flex, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useToast } from "@chakra-ui/toast";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import CEPInput from "../components/CEPInput";
import { getCEPInfo } from "../services/cep";

interface Params {
  cep: string;
}

export default function CEPInfo() {
  const toast = useToast();
  const { cep } = useParams<Params>();
  const location = useLocation<CEPInfo>();
  const [cepInfo, setCEPInfo] = useState<CEPInfo | null>(null);

  async function getCEP() {
    try {
      const cepInfo = await getCEPInfo(cep);

      setCEPInfo(cepInfo);
    } catch (err) {
      toast({
        title: `Ocorreu um erro ao resgatar o CEP!`,
        status: "error",
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    if (location.state) {
      setCEPInfo(location.state);
    } else {
      getCEP();
    }
  }, []);

  return (
    <Container maxW="container.lg">
      <Text fontWeight="bold" fontSize={54} textAlign="center">
        {cep}
      </Text>
      <Wrap justify="center" marginY="12" spacing={4}>
        <WrapItem>
          {cepInfo ? (
            <Box
              textAlign="start"
              bg="#1E2023"
              borderRadius={10}
              w="100%"
              p={4}
            >
              <Text fontWeight="bold" color="#8257E6" fontSize={18}>
                Cidade
              </Text>
              <Text fontWeight="bold" fontSize={30}>
                {cepInfo?.city || "-"}
              </Text>
            </Box>
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>

        <WrapItem>
          {cepInfo ? (
            <Box
              textAlign="start"
              bg="#1E2023"
              borderRadius={10}
              w="100%"
              p={4}
            >
              <Text fontWeight="bold" color="#8257E6" fontSize={18}>
                Estado
              </Text>
              <Text fontWeight="bold" fontSize={30}>
                {cepInfo?.uf || "-"}
              </Text>
            </Box>
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>

        <WrapItem>
          {cepInfo ? (
            <Box
              textAlign="start"
              bg="#1E2023"
              borderRadius={10}
              w="100%"
              p={4}
            >
              <Text fontWeight="bold" color="#8257E6" fontSize={18}>
                Bairro
              </Text>
              <Text fontWeight="bold" fontSize={30}>
                {cepInfo?.district || "-"}
              </Text>
            </Box>
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>

        <WrapItem>
          {cepInfo ? (
            <Box
              textAlign="start"
              bg="#1E2023"
              borderRadius={10}
              w="100%"
              p={4}
            >
              <Text fontWeight="bold" color="#8257E6" fontSize={18}>
                Logradouro
              </Text>
              <Text fontWeight="bold" fontSize={30}>
                {cepInfo?.publicPlace || "-"}
              </Text>
            </Box>
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>

        <WrapItem>
          {cepInfo ? (
            <Box
              textAlign="start"
              bg="#1E2023"
              borderRadius={10}
              w="100%"
              p={4}
            >
              <Text fontWeight="bold" color="#8257E6" fontSize={18}>
                Complemento
              </Text>
              <Text fontWeight="bold" fontSize={30}>
                {cepInfo?.complement || "-"}
              </Text>
            </Box>
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>

        <WrapItem>
          {cepInfo ? (
            <Box
              textAlign="start"
              bg="#1E2023"
              borderRadius={10}
              w="100%"
              p={4}
            >
              <Text fontWeight="bold" color="#8257E6" fontSize={18}>
                DDD
              </Text>
              <Text fontWeight="bold" fontSize={30}>
                {cepInfo?.ddd || "-"}
              </Text>
            </Box>
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>
      </Wrap>

      <Container>
        <Text fontWeight="bold" fontSize={18}>
          Não era o que estava procurando?
        </Text>

        <Flex marginY={2}>
          <CEPInput />
        </Flex>
      </Container>
    </Container>
  );
}
