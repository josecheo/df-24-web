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
import Zimbra from "../zimbra";
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
} from "./styles";

const Plans = () => {
  const [hoverMoney, setHoverMoney] = useState(false);
  const [hoverSupport, setHoverSupport] = useState(false);
  const [hoverBlock, setHoverBlock] = useState(false);
  const [hoverTrusted, setHoverTrusted] = useState(false);
  return (
    <Wrapper id="planes">
      <PrincipalContainer>
        <Text>Planes 24D-Cloud</Text>
        <P>Los precios son de acuerdo al requerimiento del cliente.</P>
        <Line />
        <ContainerCards width="90%">
          {/* PLAN BASICO */}
          <PlanCard background="-webkit-linear-gradient(90deg, #ffba75, #ff7f00)">
            <PlandCardContainer>
              <Title background="rgba(255, 186, 117, 0.4)">PLAN BÁSICO</Title>
              <P>✔ Excelente para Iniciar</P>
              <P>✔ SLA Asegurado 99.9%</P>
              <P>✔ Soporte 24/7</P>
            </PlandCardContainer>
            <WhiteContainer>
              <TitleX>Maximo 100 usuarios</TitleX>
              <TitleX>Seguridad Firewall</TitleX>
              <TitleX>Correo zima</TitleX>
              <TitleX>AntiSpam Mail Gateway</TitleX>
              <TitleX>Drive</TitleX>
              <TitleX>Talk</TitleX>
              <TitleX>Videollamada</TitleX>
              <TitleX>Pack Ofimatica</TitleX>
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
            </WhiteContainer>

            <Shape></Shape>
          </PlanCard>
          {/* PLAN ESTANDAR */}
          <PlanCard background="-webkit-linear-gradient(90deg, #9c8df1, #7f29f0)">
            <PlandCardContainer>
              <Title background="rgba(156, 141, 241, 0.4)">PLAN ESTANDAR</Title>
              <P>✔ Pequeñas empresas</P>
              <P>✔ SLA Asegurado 99.9%</P>
              <P>✔ Soporte 24/7</P>
            </PlandCardContainer>
            <WhiteContainer>
              <TitleX>Maximo 200 usuarios</TitleX>
              <TitleX>Seguridad Firewall</TitleX>
              <TitleX>Correo zima</TitleX>
              <TitleX>AntiSpam Mail Gateway</TitleX>
              <TitleX>Drive</TitleX>
              <TitleX>Talk</TitleX>
              <TitleX>Videollamada</TitleX>
              <TitleX>Pack Ofimatica</TitleX>
              <Button
                mt="30px"
                width="100%"
                height="48px"
                text="Cotiza ahora"
                background="-webkit-linear-gradient(90deg, #9c8df1, #7f29f0)"
                color="#FFFFFF"
                href="https://wa.link/egrwq3"
                target="_blank"
              ></Button>
            </WhiteContainer>

            <Shape></Shape>
          </PlanCard>
          {/* PLAN premiun */}
          <PlanCard background="-webkit-linear-gradient(90deg, #47f48f, #0dcf77)">
            <PlandCardContainer>
              <Title background="rgba(71, 244, 143, 0.4)">PLAN PREMIUM</Title>
              <P>✔ Grandes empresas</P>
              <P>✔ 100% seguro</P>
              <P>✔ Soporte 24/7</P>
            </PlandCardContainer>
            <WhiteContainer>
              <TitleX>Sin limites de usuarios</TitleX>
              <TitleX>Seguridad Firewall</TitleX>
              <TitleX>Correo zima</TitleX>
              <TitleX>AntiSpam Mail Gateway</TitleX>
              <TitleX>Drive</TitleX>
              <TitleX>Talk</TitleX>
              <TitleX>Videollamada</TitleX>
              <TitleX>Pack Ofimatica</TitleX>
              <Button
                mt="30px"
                width="100%"
                height="48px"
                text="Cotiza ahora"
                background="-webkit-linear-gradient(90deg, #47f48f, #0dcf77)"
                color="#FFFFFF"
                href="https://wa.link/egrwq3"
                target="_blank"
              ></Button>
            </WhiteContainer>

            <Shape></Shape>
          </PlanCard>
        </ContainerCards>
        {/*PLANES ZIMBRA */}

        <Zimbra></Zimbra>
        <TextX>¿Qué nos hace diferente? </TextX>
        <Line />
        <ContainerCards width="80%">
          <EspecialCard
            onMouseOver={() => setHoverMoney(true)}
            onMouseLeave={() => setHoverMoney(false)}
          >
            {hoverMoney ? (
              <EspecialImg src={moneybackwhite}></EspecialImg>
            ) : (
              <EspecialImg src={moneyback}></EspecialImg>
            )}
            <EspecialText>Garantía de reembolso </EspecialText>
            <EspecialP>
              Optimizando costos con soluciones simplifiacada, su inversion esta
              a salvo
            </EspecialP>
          </EspecialCard>

          <EspecialCard
            onMouseOver={() => setHoverSupport(true)}
            onMouseLeave={() => setHoverSupport(false)}
          >
            {hoverSupport ? (
              <EspecialImg src={supportwhite}></EspecialImg>
            ) : (
              <EspecialImg src={support}></EspecialImg>
            )}
            <EspecialText>Mejor soporte </EspecialText>
            <EspecialP>
              Especialistas que monitorean todos nuestros servicios
            </EspecialP>
          </EspecialCard>

          <EspecialCard
            onMouseOver={() => setHoverBlock(true)}
            onMouseLeave={() => setHoverBlock(false)}
          >
            {hoverBlock ? (
              <EspecialImg src={blockwhite}></EspecialImg>
            ) : (
              <EspecialImg src={block}></EspecialImg>
            )}
            <EspecialText>Seguridad de primero </EspecialText>
            <EspecialP>Maximizamos la seguridad de sus servicios.</EspecialP>
          </EspecialCard>

          <EspecialCard
            onMouseOver={() => setHoverTrusted(true)}
            onMouseLeave={() => setHoverTrusted(false)}
          >
            {hoverTrusted ? (
              <EspecialImg src={trustedwhite}></EspecialImg>
            ) : (
              <EspecialImg src={trusted}></EspecialImg>
            )}
            <EspecialText>Confianza 100% </EspecialText>
            <EspecialP>
              Muchas empresas ya confian en nuestros servicios
            </EspecialP>
          </EspecialCard>
        </ContainerCards>
      </PrincipalContainer>
    </Wrapper>
  );
};

export default Plans;
