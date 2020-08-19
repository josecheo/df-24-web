import React, { useState } from "react";
import telefono from "../../assets/services/phonewhite.svg";
import whatsapp from "../../assets/services/whatsapp.svg";
import mappin from "../../assets/services/mappin.svg";
import Button from "../../components/button";
import Input from "../../components/input";

import {
  Wrapper,
  PrincipalContainer,
  Text,
  Form,
  P,
  Line,
  ContainerCards,
  EspecialCard,
  Title,
  Circle,
  Span,
  ContainerText,
  ContainerTitle,
  CallcenterText,
  H4,
  H5,
  // Input,
  SecondContainer,
} from "./styles";

const Contact = () => {
  return (
    <Wrapper id="contacto">
      <PrincipalContainer>
        <Text>¿Como podria contactarnos?</Text>
        <Line />
        <ContainerCards max-width="1130px%">
          <EspecialCard width="360px" height="265px">
            <ContainerTitle>
              <Circle id="as">
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
              <Circle id="as">
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
              <Circle id="as">
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
        <SecondContainer>
          <CallcenterText>
            <H4>O dejanos tus datos</H4>
            <H5>y nosotros vamos a contactarte...</H5>
          </CallcenterText>
          <Form onSubmit={() => console.log("Submit")}>
            <div>
              <H4>¿Como te llamas?</H4>
              <Input type="text" id="username" name="username" required></Input>
            </div>
            <div>
              <H4>¿Cual es tu numero telefonico?</H4>
              <Input type="number" id="phone" name="phone" required></Input>
            </div>
            <div>
              <H4>Tu correo electronico</H4>
              <Input type="email" id="email" name="email" required></Input>
            </div>

            <Button
              type="submit"
              width="240px"
              height="48px"
              text="Enviar"
              background="#DD6707"
              color="#FFFFFF"
            ></Button>
          </Form>
        </SecondContainer>
      </PrincipalContainer>
    </Wrapper>
  );
};

export default Contact;
