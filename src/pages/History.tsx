import { Container, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useEffect, useState } from "react";
import EmptyHistory from "../components/EmptyHistory";
import HistoryItem from "../components/HistoryItem";
import HistorySkeleton from "../components/HistorySkeleton";
import { getHistory } from "../services/cep";

export default function History() {
  const toast = useToast();
  const [cepHistory, setHistory] = useState<CEPInfo[]>([]);
  const [isSearching, setIsSearching] = useState(true);
  const HistoryItems = () => (
    <>
      {cepHistory.map((item) => (
        <HistoryItem cepObj={item} key={item.cep} />
      ))}
    </>
  );

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
      <Text variant="title">CEPs Recentes</Text>

      {cepHistory.length > 0 ? (
        <HistoryItems />
      ) : isSearching ? (
        <HistorySkeleton />
      ) : (
        <EmptyHistory />
      )}
    </Container>
  );
}
