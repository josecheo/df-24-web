import React from "react";
import { ContainerInput, StyledInput } from "./styles";

const Input = (props) => {
  return (
    <ContainerInput {...props} width={"100%"}>
      <StyledInput {...props} />
    </ContainerInput>
  );
};

export default Input;
