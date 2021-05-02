import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";

export default function EmptyHistory() {
  return (
    <>
      <Image
        marginY={4}
        src="/assets/norecent.svg"
        alt="Homem segurando caixa vazia"
      />
      <Text variant="description">Não encontramos CEPs recém-pesquisados!</Text>
    </>
  );
}
