import React, { useState } from "react";
import telefono from "../../assets/services/phonewhite.svg";
import whatsapp from "../../assets/services/whatsapp.svg";
import mappin from "../../assets/services/mappin.svg";

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
  Circle,
  Span,
  ContainerText,
  ContainerTitle,
  WhiteContainer,
  TitleX,
  EspecialText,
  EspecialP,
  EspecialImg,
} from "./styles";

const Contact = () => {
  const [hoverMoney, setHoverMoney] = useState(false);
  const [hoverSupport, setHoverSupport] = useState(false);
  const [hoverBlock, setHoverBlock] = useState(false);
  const [hoverTrusted, setHoverTrusted] = useState(false);
  return (
    <Wrapper>
      <PrincipalContainer>
        <Text>¿Como podria contactarnos?</Text>
        <Line />
        <ContainerCards max-width="1130px%">
          <EspecialCard width="360px" height="265px">
            <ContainerTitle>
              <Circle bg="red">
                <img src={telefono}></img>
              </Circle>
              <Title>LLAMA GRATIS</Title>
            </ContainerTitle>
            <ContainerText>
              <P>
                Atención al cliente 24/7 Llama gratis al <Span>385900285</Span>
              </P>
              <br></br>
              <P>Disfrute de una consulta gratuita con los mejores expertos.</P>
            </ContainerText>
          </EspecialCard>
          <EspecialCard
            width="360px"
            height="285px"
            cursor
            onClick={() => window.open("https://wa.link/egrwq3", "_blank")}
          >
            <ContainerTitle>
              <Circle bg="red">
                <img src={whatsapp}></img>
              </Circle>
              <Title>CHATEA AHORA</Title>
            </ContainerTitle>
            <ContainerText>
              <P>
                Estamos listos para responder todas y cada una de las preguntas.
              </P>
              <br></br>
              <P>
                Comience a chatear con nuestro representante haciendo clic en
                este icono.
              </P>
            </ContainerText>
          </EspecialCard>
          <EspecialCard width="360px" height="265px">
            <ContainerTitle>
              <Circle bg="red">
                <img src={mappin}></img>
              </Circle>
              <Title>VISÍTANOS</Title>
            </ContainerTitle>
            <ContainerText>
              <P>
                Estamos ubicados en Lima, Mañana ¡Ven y toma una buena taza de
                café!
              </P>
              <br></br>
              <P>
                Lima Metropolitana, Av Ramón Zavala 217, Villa Sol, Los Olivos
              </P>
            </ContainerText>
          </EspecialCard>
        </ContainerCards>
      </PrincipalContainer>
    </Wrapper>
  );
};

export default Contact;
