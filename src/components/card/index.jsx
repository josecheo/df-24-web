import React from "react";
import { Wrapper, Title, Container, Circle, Info, P } from "./styles";

const Card = (props) => {
  const { title, description, ico, icoColor, descriptionsecond } = props;

  return (
    <Wrapper {...props}>
      <Container>
        <Circle bg={icoColor}>
          <img src={ico}></img>
        </Circle>
        <Info>
          <Title>{title}</Title>
          <P>{description}</P>
          <P>{descriptionsecond}</P>
        </Info>
      </Container>
    </Wrapper>
  );
};

export default Card;
