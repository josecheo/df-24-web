import React from "react";
import Card from "../../components/card";
import { ServicesCards } from "./info";

import {
  Wrapper,
  Shape,
  PrincipalContainer,
  Text,
  P,
  Line,
  ContainerCards,
} from "./styles";

const Services = () => (
  <Wrapper>
    <Shape />
    <PrincipalContainer>
      <Text>Nuestros Servicios</Text>
      <P>Designed to satisfy your creative needs.</P>
      <Line />
      <ContainerCards>
        {ServicesCards.map((elements, index) => (
          <Card
            key={index}
            width="500px"
            height="250px"
            title={elements.Title}
            description={elements.Description}
            icoColor={elements.icoColor}
            ico={elements.ico}
          ></Card>
        ))}
      </ContainerCards>
    </PrincipalContainer>
  </Wrapper>
);

export default Services;
