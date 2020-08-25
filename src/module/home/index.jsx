import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Services from "../services";
import Plans from "../plans";
import callcenter from "../../assets/CALLCENTER.svg";
import Partners from "../partners";
import Contact from "../contact";
import Products from "../products";
import Footer from "../footer";
import servidores from "../../assets/servidores.svg";
import Zimbra from "../zimbra";
import {
  Wrapper,
  SecondContainer,
  Container,
  Text,
  Shape,
  H4,
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
                  background="#DD6707"
                  color="#FFFFFF"
                ></Button>
                <Button
                  ml="60px"
                  mt="100px"
                  width="230px"
                  height="48px"
                  text="Empezemos"
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
      <Services />
      <TapMessage>
        <CallcenterText>
          <H4>Modulos Call Center</H4>
          <H5>
            Supere los desafíos y logre sus objetivos comerciales únicos con un
            modulo call center optimizado para su empresa, contactanos ahora
            para mas información.
          </H5>
        </CallcenterText>
        <CallcenterImg src={callcenter}></CallcenterImg>
      </TapMessage>
      {/* <Products /> */}
      <Plans />
      {/* <TapMessageSecond /> */}
      <Zimbra />
      <Partners />
      <Contact />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
