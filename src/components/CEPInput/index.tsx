import { Input } from "@chakra-ui/input";
import InputMask from "react-input-mask";

interface CEPInputProps {
  value: string;
  error?: boolean;
  borderBottomRightRadius?: number;
  borderTopRightRadius?: number;

  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function CEPInput(props: CEPInputProps) {
  return (
    <InputMask
      mask="99999-999"
      value={props.value}
      onChange={props.onChange}
      maskChar=""
    >
      {(inputProps: unknown) => (
        <Input
          {...inputProps}
          isInvalid={props.error}
          focusBorderColor="#8257E6"
          errorBorderColor="crimson"
          variant="filled"
          size="lg"
          placeholder="Digite um CEP"
          borderBottomRightRadius={props.borderBottomRightRadius}
          borderTopRightRadius={props.borderTopRightRadius}
          bgColor="#363636"
        />
      )}
    </InputMask>
  );
}
