import { Box, Text } from "@chakra-ui/layout";

interface CEPDetailProps {
  title: string;
  value?: string;
}

export default function CEPDetail({ title, value }: CEPDetailProps) {
  return (
    <Box textAlign="start" bg="#1E2023" borderRadius={10} w="100%" p={4}>
      <Text fontWeight="bold" color="primary" variant="description">
        {title}
      </Text>
      <Text variant="detail">{value || "-"}</Text>
    </Box>
  );
}
