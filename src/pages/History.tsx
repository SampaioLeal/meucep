import { Image } from "@chakra-ui/image";
import { Container, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useToast } from "@chakra-ui/toast";
import { useEffect, useState } from "react";
import HistoryItem from "../components/HistoryItem";
import { getHistory } from "../services/cep";

export default function History() {
  const toast = useToast();
  const [cepHistory, setHistory] = useState<CEPInfo[]>([]);
  const [isSearching, setIsSearching] = useState(true);

  async function sync() {
    try {
      const history = await getHistory();

      console.log(history);
      setHistory(history);
    } catch (err) {
      toast({
        title: `Ocorreu um erro ao resgatar o histórico!`,
        status: "error",
        isClosable: true,
      });
    }

    setIsSearching(false);
  }

  useEffect(() => {
    sync();
  }, []);

  return (
    <Container textAlign="center">
      <Text fontWeight="bold" fontSize={54}>
        CEPs Recentes
      </Text>

      {cepHistory.length ? (
        cepHistory.map((item) => <HistoryItem cepObj={item} key={item.cep} />)
      ) : isSearching ? (
        <>
          <Skeleton height="100px" width="100%" my={2} />
          <Skeleton height="100px" width="100%" my={2} />
          <Skeleton height="100px" width="100%" my={2} />
        </>
      ) : (
        <>
          <Image
            marginY={4}
            src="/assets/norecent.svg"
            alt="Homem segurando caixa vazia"
          />
          <Text fontSize={18}>Não encontramos CEPs recém-pesquisados!</Text>
        </>
      )}
    </Container>
  );
}
