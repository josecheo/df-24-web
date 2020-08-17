import React from "react";
import Button from "../../components/button";
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
} from "./styles";

const Plans = () => (
  <Wrapper>
    <PrincipalContainer>
      <Text>Infraestructura cloud </Text>
      <P>Los precios son de acuerdo al requerimiento del cliente.</P>
      <Line />
      <ContainerCards width="70%">
        {/* PLAN BASICO */}
        <PlanCard background="-webkit-linear-gradient(90deg, #ffba75, #ff7f00)">
          <PlandCardContainer>
            <Title background="rgba(255, 186, 117, 0.4)">PLAN BÁSICO</Title>
            <P>✔ Excelente para Iniciar</P>
            <P>✔ 100% seguro</P>
            <P>✔ Soporte 24/7</P>
          </PlandCardContainer>
          <WhiteContainer>
            <TitleX>Seguridad PFSENSE</TitleX>
            <TitleX>Correo zima</TitleX>
            <TitleX>Nextcloud</TitleX>
            <TitleX>Talk</TitleX>
            <TitleX>Videollamada</TitleX>
            <TitleX>Document Server</TitleX>
            <Button
              mt="30px"
              width="100%"
              height="48px"
              text="Cotiza ahora"
              background="-webkit-linear-gradient(90deg, #ffba75, #ff7f00)"
              color="#FFFFFF"
            ></Button>
          </WhiteContainer>

          <Shape></Shape>
        </PlanCard>
        {/* PLAN ESTANDAR */}
        <PlanCard background="-webkit-linear-gradient(90deg, #9c8df1, #7f29f0)">
          <PlandCardContainer>
            <Title background="rgba(156, 141, 241, 0.4)">PLAN ESTANDAR</Title>
            <P>✔ Excelente para negocios</P>
            <P>✔ 100% seguro</P>
            <P>✔ Soporte 24/7</P>
          </PlandCardContainer>
          <WhiteContainer>
            <TitleX>Seguridad PFSENSE</TitleX>
            <TitleX>Correo zima</TitleX>
            <TitleX>Nextcloud</TitleX>
            <TitleX>Talk</TitleX>
            <TitleX>Videollamada</TitleX>
            <TitleX>Document Server</TitleX>
            <Button
              mt="30px"
              width="100%"
              height="48px"
              text="Cotiza ahora"
              background="-webkit-linear-gradient(90deg, #9c8df1, #7f29f0)"
              color="#FFFFFF"
            ></Button>
          </WhiteContainer>

          <Shape></Shape>
        </PlanCard>
        {/* PLAN premiun */}
        <PlanCard background="-webkit-linear-gradient(90deg, #47f48f, #0dcf77)">
          <PlandCardContainer>
            <Title background="rgba(71, 244, 143, 0.4)">PLAN PREMIUM</Title>
            <P>✔ Para grandes empresas</P>
            <P>✔ 100% seguro</P>
            <P>✔ Soporte 24/7</P>
          </PlandCardContainer>
          <WhiteContainer>
            <TitleX>Seguridad PFSENSE</TitleX>
            <TitleX>Correo zima</TitleX>
            <TitleX>Nextcloud</TitleX>
            <TitleX>Talk</TitleX>
            <TitleX>Videollamada</TitleX>
            <TitleX>Document Server</TitleX>
            <Button
              mt="30px"
              width="100%"
              height="48px"
              text="Cotiza ahora"
              background="-webkit-linear-gradient(90deg, #47f48f, #0dcf77)"
              color="#FFFFFF"
            ></Button>
          </WhiteContainer>

          <Shape></Shape>
        </PlanCard>
      </ContainerCards>
      <TextX>¿Qué nos hace especial? </TextX>
      <Line />
      <ContainerCards width="80%">
        <EspecialCard></EspecialCard>
        <EspecialCard></EspecialCard>
        <EspecialCard></EspecialCard>
        <EspecialCard></EspecialCard>
      </ContainerCards>
    </PrincipalContainer>
  </Wrapper>
);

export default Plans;
