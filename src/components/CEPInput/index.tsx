import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
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
    if (cep.length !== 9) {
      return toast({
        title: `O CEP deve conter 8 números!`,
        status: "warning",
        isClosable: true,
      });
    }

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
    <>
      <InputMask
        mask="99999-999"
        value={cep}
        onChange={handleCEPChange}
        maskChar=""
      >
        {(inputProps: unknown) => (
          <Input
            variant="primary"
            {...inputProps}
            borderBottomRightRadius={0}
            borderTopRightRadius={0}
            size="lg"
            placeholder="Digite um CEP"
          />
        )}
      </InputMask>
      <Button
        variant="primary"
        borderBottomLeftRadius={0}
        borderTopLeftRadius={0}
        isLoading={isLoading}
        size="lg"
        _focus={{}}
        onClick={handleSearch}
      >
        Pesquisar
      </Button>
    </>
  );
}
