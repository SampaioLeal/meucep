import { Skeleton } from "@chakra-ui/skeleton";

export default function HistorySkeleton() {
  return (
    <>
      <Skeleton height="100px" width="100%" my={2} />
      <Skeleton height="100px" width="100%" my={2} />
      <Skeleton height="100px" width="100%" my={2} />
    </>
  );
}
