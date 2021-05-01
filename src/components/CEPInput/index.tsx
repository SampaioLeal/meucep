import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";
import InputMask from "react-input-mask";
import { useHistory } from "react-router";
import { getCEPInfo } from "../../services/cep";

export default function CEPInput() {
  const toast = useToast();
  const history = useHistory();
  const [cep, setCEP] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleCEPChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCEP(e.target.value);
  }

  async function handleSearch() {
    setIsLoading(true);

    try {
      const cepInfo = await getCEPInfo(cep);

      history.push({
        pathname: `/cep/${cep}`,
        state: cepInfo,
      });
    } catch (err) {
      toast({
        title: `Ocorreu um erro ao resgatar o CEP!`,
        status: "error",
        isClosable: true,
      });
    }

    setIsLoading(false);
  }

  return (
    <Flex marginY={2}>
      <InputMask
        mask="99999-999"
        value={cep}
        onChange={handleCEPChange}
        maskChar=""
      >
        {(inputProps: unknown) => (
          <Input
            {...inputProps}
            borderBottomRightRadius={0}
            borderTopRightRadius={0}
            // isInvalid={props.error}
            focusBorderColor="#8257E6"
            errorBorderColor="crimson"
            variant="filled"
            size="lg"
            placeholder="Digite um CEP"
            bgColor="#363636"
          />
        )}
      </InputMask>
      <Button
        borderBottomLeftRadius={0}
        borderTopLeftRadius={0}
        isLoading={isLoading}
        bgColor="#8257E6"
        size="lg"
        _hover={{
          backgroundColor: "#6641bd",
        }}
        _active={{
          backgroundColor: "#4a2e8b",
        }}
        _focus={{}}
        onClick={handleSearch}
      >
        Pesquisar
      </Button>
    </Flex>
  );
}
