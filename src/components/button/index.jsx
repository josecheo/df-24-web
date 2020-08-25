import React, { useRef, createRef } from "react";
import { Wrapper, Text } from "./styles";

const Button = (props) => {
  const {
    width,
    height,
    text,
    background,
    color,
    ml,
    mt,
    href,
    target,
  } = props;
  const texts = createRef();

  const focuss = () => {
    texts.current.click();
  };

  return (
    <Wrapper
      {...props}
      mt={mt}
      ml={ml}
      width={width}
      height={height}
      background={background}
      onClick={() => focuss()}
    >
      <Text ref={texts} href={href} target={target} color={color}>
        {text}
      </Text>
    </Wrapper>
  );
};

export default Button;
