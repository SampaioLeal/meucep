import { Image } from "@chakra-ui/image";
import { Container, Text } from "@chakra-ui/layout";
import HistoryItem from "../components/HistoryItem";

export default function History() {
  const cepHistory: {
    city: string;
    uf: string;
    cep: string;
  }[] = [];

  return (
    <Container textAlign="center">
      <Text fontWeight="bold" fontSize={54}>
        CEPs Recentes
      </Text>

      {cepHistory.length ? (
        cepHistory.map((item) => <HistoryItem cepObj={item} key={item.cep} />)
      ) : (
        <Image
          marginY={4}
          src="/assets/norecent.svg"
          alt="Homem segurando caixa vazia"
        />
      )}

      <Text fontSize={18}>Não encontramos CEPs recém-pesquisados!</Text>
    </Container>
  );
}
