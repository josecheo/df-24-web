import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Services from "../services";
import Plans from "../plans";
import callcenter from "../../assets/CALLCENTER.svg";
import Partners from "../partners";
import Contact from "../contact";
import bussines from "../../assets/services/bussines.svg";
import Footer from "../footer";
import servidores from "../../assets/servidores.svg";
import Zimbra from "../zimbra";
import Asterik from "../asterik";
import {
  Wrapper,
  SecondContainer,
  Container,
  Text,
  Shape,
  H4,
  H4A,
  H5A,
  Spam,
  TapMessageSecond,
  ContainerText,
  SecondContainerImg,
  ContainerButtons,
  PrincipalContainer,
  SecondContainerImgPc,
  HomeContainer,
  TapMessage,
  CallcenterText,
  CallcenterImg,
  H5,
} from "./styles";

import PcImg from "../../assets/PcImg.svg";
import Button from "../../components/button";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(!animate), 5000);
  }, [animate]);
  return (
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
                  text="contacto"
                  href="#contacto"
                  background="#DD6707"
                  color="#FFFFFF"
                ></Button>
                <Button
                  ml="60px"
                  mt="100px"
                  width="230px"
                  height="48px"
                  text="Empezemos"
                  href="#about"
                  background="#FFFFFF"
                  color="#FF7F00"
                ></Button>
              </ContainerButtons>
            </SecondContainer>
            {animate ? (
              <SecondContainerImg
                bg={servidores}
                animate={animate}
                width="200px"
              ></SecondContainerImg>
            ) : (
              <SecondContainerImgPc
                bg={PcImg}
                animate={animate}
                width="200px"
              ></SecondContainerImgPc>
            )}
          </Container>
        </PrincipalContainer>
        <Shape />
      </Wrapper>
      <TapMessageSecond id="about">
        <CallcenterText>
          <H4A>¿Quienes somos ?</H4A>
          <H5A>
            24D&F OLUCIONES SAC Empresa Peruana de consultoria y servicios
            tecnologicos. Ofrecemos soluciones de calidad que repercuten de
            manera positiva en el éxito de su negocio. Disponemos de una amplio
            portafolio de soluciones OpenSource para satifacer las variades
            necesidades y obejtivos en cualquier organizacion.
          </H5A>
        </CallcenterText>
        <CallcenterImg src={bussines}></CallcenterImg>
      </TapMessageSecond>
      <Services />
      <Asterik></Asterik>

      {/* <Products /> */}
      <Plans />
      {/* <Zimbra /> */}
      <Partners />
      <Contact />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
