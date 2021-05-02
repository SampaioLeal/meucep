import { Box, Text } from "@chakra-ui/layout";
import { useHistory } from "react-router";

interface HistoryItemProps {
  cepObj: {
    city: string;
    uf: string;
    cep: string;
  };
}

export default function HistoryItem({ cepObj }: HistoryItemProps) {
  const history = useHistory();

  function handleGoToCEP(cep: string) {
    history.push(`/cep/${cep}`);
  }

  return (
    <Box
      textAlign="start"
      bg="#1E2023"
      borderRadius={10}
      w="100%"
      padding={4}
      marginY={4}
      cursor="pointer"
      onClick={() => handleGoToCEP(cepObj.cep)}
      transitionDuration="0.2s"
      _hover={{
        transform: "scale(1.02)",
      }}
    >
      <Text fontWeight="bold" color="primary" variant="description">
        {cepObj.city} - {cepObj.uf}
      </Text>
      <Text variant="detail">{cepObj.cep}</Text>
    </Box>
  );
}
