import React from "react";
import {
  Wrapper,
  Title,
  Container,
  Card,
  Circle,
  ContainerText,
  P,
} from "./styles";

const Menu = (props) => {
  const { data } = props;

  return (
    <Wrapper {...props}>
      <Container>
        {data.map((elements, index) => (
          <Card>
            <Circle bg={elements.icoColor}>
              <img src={elements.ico}></img>
            </Circle>
            <ContainerText>
              <Title>{elements.Title.toUpperCase()}</Title>
              <P>{elements.Description}</P>
            </ContainerText>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Menu;
