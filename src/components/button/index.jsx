import React from "react";
import { Wrapper, Text } from "./styles";

const Button = (props) => {
  const { width, height, text, background, color, ml, mt } = props;

  return (
    <Wrapper
      {...props}
      mt={mt}
      ml={ml}
      width={width}
      height={height}
      background={background}
    >
      <Text color={color}>{text}</Text>
    </Wrapper>
  );
};

export default Button;
