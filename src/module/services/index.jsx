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
  <Wrapper id="services">
    <Shape />
    <PrincipalContainer>
      <Text>Nuestros Servicios</Text>
      <P>Calidad y responsabilidad garantizada</P>
      <Line />
      <ContainerCards>
        {ServicesCards.map((elements, index) => (
          <Card
            key={index}
            width="400px"
            height="250px"
            title={elements.Title}
            description={elements.Description}
            descriptionsecond={elements.descriptionsecond}
            icoColor={elements.icoColor}
            ico={elements.ico}
          ></Card>
        ))}
      </ContainerCards>
    </PrincipalContainer>
  </Wrapper>
);

export default Services;
