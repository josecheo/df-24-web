import React from "react";
import Header from "../../components/header";
import Services from "../services";
import Plans from "../plans";
import callcenter from "../../assets/CALLCENTER.svg";
import Partners from "../partners";
import Contact from "../contact";
import Footer from "../footer";
import {
  Wrapper,
  SecondContainer,
  Container,
  Text,
  Shape,
  H4,
  Spam,
  ContainerText,
  SecondContainerImg,
  ContainerButtons,
  PrincipalContainer,
  HomeContainer,
  TapMessage,
  CallcenterText,
  CallcenterImg,
  H5,
} from "./styles";

import PcImg from "../../assets/PcImg.svg";
import Button from "../../components/button";

const Home = () => (
  <HomeContainer>
    <Wrapper>
      <PrincipalContainer>
        <Header />
        <Container>
          <SecondContainer>
            <ContainerText>
              <Text>
                Soluciones <Spam>técnologicas</Spam> y <Spam>calidad</Spam>{" "}
                comprobada.
              </Text>
            </ContainerText>
            <ContainerButtons>
              <Button
                mt="100px"
                width="190px"
                height="48px"
                text="Cotiza"
                background="#DD6707"
                color="#FFFFFF"
              ></Button>
              <Button
                ml="60px"
                mt="100px"
                width="230px"
                height="48px"
                text="Contacto"
                background="#FFFFFF"
                color="#FF7F00"
              ></Button>
            </ContainerButtons>
          </SecondContainer>
          <SecondContainerImg>
            <img alt="Pc" src={PcImg} width="700px"></img>
          </SecondContainerImg>
        </Container>
      </PrincipalContainer>
      <Shape />
    </Wrapper>
    <Services />
    <TapMessage>
      <CallcenterText>
        <H4>Modulos Call Center</H4>
        <H5>
          Supere los desafíos y logre sus objetivos comerciales únicos con un
          modulo call center optimizado para su empresa, contactanos ahora para
          mas información.
        </H5>
      </CallcenterText>
      <CallcenterImg src={callcenter}></CallcenterImg>
    </TapMessage>

    <Plans />

    <Partners />
    <Contact />
    <Footer />
  </HomeContainer>
);

export default Home;
