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
      <Text variant="title" textAlign="center">
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
              <Text fontWeight="bold" color="primary" variant="description">
                Cidade
              </Text>
              <Text variant="detail">{cepInfo?.city || "-"}</Text>
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
              <Text fontWeight="bold" color="primary" variant="description">
                Estado
              </Text>
              <Text variant="detail">{cepInfo?.uf || "-"}</Text>
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
              <Text fontWeight="bold" color="primary" variant="description">
                Bairro
              </Text>
              <Text variant="detail">{cepInfo?.district || "-"}</Text>
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
              <Text fontWeight="bold" color="primary" variant="description">
                Logradouro
              </Text>
              <Text variant="detail">{cepInfo?.publicPlace || "-"}</Text>
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
              <Text fontWeight="bold" color="primary" variant="description">
                Complemento
              </Text>
              <Text variant="detail">{cepInfo?.complement || "-"}</Text>
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
              <Text fontWeight="bold" color="primary" variant="description">
                DDD
              </Text>
              <Text variant="detail">{cepInfo?.ddd || "-"}</Text>
            </Box>
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>
      </Wrap>

      <Container>
        <Text fontWeight="bold" variant="description">
          Não era o que estava procurando?
        </Text>

        <Flex marginY={2}>
          <CEPInput />
        </Flex>
      </Container>
    </Container>
  );
}
