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
} from "./styles";

const Zimbra = () => {
  return (
    <Wrapper id="zimbra">
      <PrincipalContainer>
        <Text>Zimbra Cloud Packs</Text>
        <PS>Lleva tu organización a otro nivel</PS>
        <Line />
        <ContainerCards width="90%">
          {/* PLAN BASICO */}
          <PlanCard background="#FFFFFF">
            <Title>PACK BÁSICO</Title>
            <PlandCardContainer>
              <P>✔ 8 gb de Cloud</P>
              <P>✔ Para moviles</P>
              <P>✔ Certifcado SSL</P>
              <P>✔ Seguridad AvanzadA</P>
              <P>✔ Antispam + Antivirus</P>
              <P>✔ Migración gratuita</P>
              <P>✔ Backups por 30 días</P>
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
            <Title>PACK PROFESIONAL</Title>
            <PlandCardContainer>
              <P>✔ 15 gb de Cloud</P>
              <P>✔ 15 gb de Drive</P>
              <P>✔ Pack Office</P>
              <P>✔ VideoConferencia</P>
              <P>✔ Para moviles</P>
              <P>✔ Certifcado SSL</P>
              <P>✔ Seguridad AvanzadA</P>
              <P>✔ Antispam + Antivirus</P>
              <P>✔ Migración gratuita</P>
              <P>✔ Backups por 30 días</P>
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
          {/* PLAN ESTANDAR */}
          <PlanCard background="#FFFFFF">
            <Title>PACK ESTANDAR</Title>
            <PlandCardContainer>
              <P>✔ 15 gb de Cloud</P>
              <P>✔ Para moviles</P>
              <P>✔ Certifcado SSL</P>
              <P>✔ Seguridad AvanzadA</P>
              <P>✔ Antispam + Antivirus</P>
              <P>✔ Migración gratuita</P>
              <P>✔ Backups por 30 días</P>
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

export default Zimbra;
