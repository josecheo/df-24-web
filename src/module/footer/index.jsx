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

const Footer = () => (
  <Wrapper>
    {/* <Shape /> */}
    <PrincipalContainer>
      {/* <Text>Aliados comerciales </Text>
      <P>Marcas reconocidas en todo el mundo.</P>
      <Line /> */}
      {/* <ContainerCards>
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
      </ContainerCards> */}
    </PrincipalContainer>
  </Wrapper>
);

export default Footer;
