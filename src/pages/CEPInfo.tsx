import { Container, Flex, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useToast } from "@chakra-ui/toast";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import CEPDetail from "../components/CEPDetail";
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

  async function sync() {
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
      sync();
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
            <CEPDetail title="Cidade" value={cepInfo.city} />
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>

        <WrapItem>
          {cepInfo ? (
            <CEPDetail title="Estado" value={cepInfo.uf} />
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>

        <WrapItem>
          {cepInfo ? (
            <CEPDetail title="Bairro" value={cepInfo.district} />
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>

        <WrapItem>
          {cepInfo ? (
            <CEPDetail title="Logradouro" value={cepInfo.publicPlace} />
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>

        <WrapItem>
          {cepInfo ? (
            <CEPDetail title="Complemento" value={cepInfo.complement} />
          ) : (
            <Skeleton height="100px" width="140px" />
          )}
        </WrapItem>

        <WrapItem>
          {cepInfo ? (
            <CEPDetail title="DDD" value={cepInfo.ddd} />
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
