import React, { useState } from "react";
import Button from "../../components/button";
import moneyback from "../../assets/services/money-back.svg";
import moneybackwhite from "../../assets/services/money-back-white.svg";
import support from "../../assets/services/support.svg";
import supportwhite from "../../assets/services/supportwite.svg";
import block from "../../assets/services/block.svg";
import blockwhite from "../../assets/services/blockwhite.svg";
import trusted from "../../assets/services/trusted.svg";
import trustedwhite from "../../assets/services/trustedwhite.svg";
import asterikLogo from "../../assets/services/Asterisk_Logo.svg_.png";
import callcenter from "../../assets/CALLCENTER.svg";
import callbot from "../../assets/services/callbot.png";
import contaccenter from "../../assets/services/contactcenter.jpg";
import astt from "../../assets/services/astt.jpg";

import {
  Wrapper,
  PrincipalContainer,
  Text,
  TextX,
  P,
  Line,
  ContainerCards,
  PlanCard,
  EspecialCard,
  PlandCardContainer,
  Shape,
  Title,
  WhiteContainer,
  TitleX,
  EspecialText,
  EspecialP,
  EspecialImg,
  PS,
  ImgContainer,
  Img,
} from "./styles";

const Asterik = () => {
  return (
    <Wrapper id="asterik">
      <PrincipalContainer>
        <Img src={asterikLogo}></Img>
        {/* <Text>Asterik</Text> */}
        <Line />
        <ContainerCards width="90%">
          {/* PLAN BASICO */}
          <PlanCard background="#FFFFFF">
            <Title>CALL CENTER</Title>
            <ImgContainer src={callcenter}></ImgContainer>
            <PlandCardContainer>
              <P>
                Crea campañas para ventas, cobranzas, atención al cliente y
                encuestas de manera personalizada.
              </P>
              <P>Monitoreo en tiempo real</P>
            </PlandCardContainer>
            <Button
              mt="30px"
              width="100%"
              height="48px"
              text="Cotiza ahora"
              background="-webkit-linear-gradient(90deg, #ffba75, #ff7f00)"
              color="#FFFFFF"
              href="https://wa.link/egrwq3"
              target="_blank"
            ></Button>
          </PlanCard>

          <PlanCard background="#FFFFFF">
            <Title>CALLBOT</Title>
            <ImgContainer src={callbot}></ImgContainer>
            <PlandCardContainer>
              <P>
                Automatice las llamadas INBOUND/OUTBOUND de su negocio. La
                central telefónica cognitiva es la nueva solución para la
                atención de sus clientes.
              </P>
            </PlandCardContainer>
            <Button
              mt="30px"
              width="100%"
              height="48px"
              text="Cotiza ahora"
              background="-webkit-linear-gradient(90deg, #ffba75, #ff7f00)"
              color="#FFFFFF"
              href="https://wa.link/egrwq3"
              target="_blank"
            ></Button>
          </PlanCard>

          <PlanCard background="#FFFFFF">
            <Title>CONTA CENTER</Title>
            <ImgContainer src={contaccenter}></ImgContainer>
            <PlandCardContainer>
              <P>
                Unifica tus comunicaciones, ahorra en instalaciones,
                mantenimiento y técnicos.
              </P>
            </PlandCardContainer>
            <Button
              mt="30px"
              width="100%"
              height="48px"
              text="Cotiza ahora"
              background="-webkit-linear-gradient(90deg, #ffba75, #ff7f00)"
              color="#FFFFFF"
              href="https://wa.link/egrwq3"
              target="_blank"
            ></Button>
          </PlanCard>

          <PlanCard background="#FFFFFF">
            <Title>IVR AUTOMATIZADO</Title>
            <ImgContainer src={astt}></ImgContainer>
            <PlandCardContainer>
              <P>
                permite a los clientes interactuar con el sistema host de una
                empresa a través de un teclado telefónico o mediante
                reconocimiento de voz
              </P>
            </PlandCardContainer>
            <Button
              mt="30px"
              width="100%"
              height="48px"
              text="Cotiza ahora"
              background="-webkit-linear-gradient(90deg, #ffba75, #ff7f00)"
              color="#FFFFFF"
              href="https://wa.link/egrwq3"
              target="_blank"
            ></Button>
          </PlanCard>
          {/* PLAN premiun */}
        </ContainerCards>
        {/*PLANES ZIMBRA */}
      </PrincipalContainer>
    </Wrapper>
  );
};

export default Asterik;
