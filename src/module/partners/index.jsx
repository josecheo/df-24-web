import React from "react";
import yealink from "../../assets/marcas/yealink.jpg";
import yeastar from "../../assets/marcas/yeastar.png";
import zimba from "../../assets/marcas/zimba.png";
import office from "../../assets/marcas/office.png";
import kaspersky from "../../assets/marcas/kaspersky.png";
import issabel from "../../assets/marcas/issabel.webp";
import hikvision from "../../assets/marcas/hikvision.png";
import fanvil from "../../assets/marcas/fanvil.jpg";
import eset from "../../assets/marcas/eset.png";
import adhua from "../../assets/marcas/adhua.png";

import dell from "../../assets/marcas/dell.png";
import lenovo from "../../assets/marcas/lenovo.jpg";
import sophos from "../../assets/marcas/sophos.jpg";
import hp from "../../assets/marcas/hp.jpg";
import Fortinet from "../../assets/marcas/Fortinet.svg";

import {
  Wrapper,
  Shape,
  PrincipalContainer,
  Text,
  P,
  Line,
  ContainerCards,
  Card,
} from "./styles";

const Partners = () => (
  <Wrapper>
    {/* <Shape /> */}
    <PrincipalContainer>
      <Text>Aliados comerciales </Text>
      <P>Marcas reconocidas en todo el mundo.</P>
      <Line />
      <ContainerCards>
        <Card>
          <img src={yealink}></img>
        </Card>
        <Card>
          <img src={yeastar}></img>
        </Card>
        <Card>
          <img src={zimba}></img>
        </Card>
        <Card>
          <img src={office}></img>
        </Card>
        <Card>
          <img src={kaspersky}></img>
        </Card>
        <Card>
          <img src={issabel}></img>
        </Card>
        <Card>
          <img src={hikvision}></img>
        </Card>
        <Card>
          <img src={fanvil}></img>
        </Card>
        <Card>
          <img src={eset}></img>
        </Card>
        <Card>
          <img src={adhua}></img>
        </Card>
        <Card>
          <img src={dell}></img>
        </Card>
        <Card>
          <img src={lenovo}></img>
        </Card>
        <Card>
          <img src={sophos}></img>
        </Card>
        <Card>
          <img src={hp}></img>
        </Card>
        <Card>
          <img src={Fortinet}></img>
        </Card>
      </ContainerCards>
    </PrincipalContainer>
    {/* <Shape></Shape> */}
  </Wrapper>
);

export default Partners;
