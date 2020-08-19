import React from "react";
import telefonoIP from "../../assets/services/telefonoIP.jpg";
import servidores from "../../assets/services/servidores.jpg";
import camaras from "../../assets/services/102244137_caamara.jpg";
import impresoras from "../../assets/services/impresora.jpg";
import laptos from "../../assets/services/laptop-2557586_1920.jpg";

import {
  Wrapper,
  Shape,
  PrincipalContainer,
  Text,
  TextCards,
  BorderCards,
  P,
  Img,
  Line,
  Card,
  ContainerCards,
} from "./styles";

const Products = () => (
  <Wrapper>
    <PrincipalContainer>
      <Text>Productos</Text>
      <Line />
      <ContainerCards>
        <Card bg={telefonoIP}>
          <BorderCards>
            <TextCards>TELEFONOS IP</TextCards>
          </BorderCards>
        </Card>
        <Card bg={servidores}></Card>
        <Card bg={camaras}> </Card>
        <Card bg={laptos}></Card>
      </ContainerCards>
    </PrincipalContainer>
  </Wrapper>
);

export default Products;
