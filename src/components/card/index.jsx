import React from "react";
import { Wrapper, Title, Container, Circle, Info, P } from "./styles";

const Card = (props) => {
  const { title, description, ico, icoColor } = props;

  return (
    <Wrapper {...props}>
      <Container>
        <Circle bg={icoColor}>
          <img src={ico}></img>
        </Circle>
        <Info>
          <Title>{title}</Title>
          <P>{description}</P>
        </Info>
      </Container>
    </Wrapper>
  );
};

export default Card;
