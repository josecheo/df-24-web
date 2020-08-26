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
            Somos una empresa peruana. desarrolladora de Soluciones de Software
            y de Aplicaciones Web a la medida, para empresas y todo tipo de
            organizaciones. Nuestra empresa fue fundada el año 2019. que, desde
            su creación, desarrolla software a la medida con personal
            especializado. Nuestro objetivo es proporcionar soluciones
            informáticas y de gestión adecuadas a cada cliente, usando
            tecnologías y metodologías avanzadas. Sistemas y software
            desarrollados por personal altamente calificado que satisfacen las
            necesidades del cliente, cumpliendo criterios de eficacia, calidad,
            competitividad y rentabilidad. En 24 d&f soluciones nos enfocamos en
            potenciar el progreso y productividad de las empresas. Por ello
            ponemos a su disposición diversas soluciones TI como:
            ciberseguridad, virtualización, networking, cloud, correo zimbra ,
            data center outsourcing y demás, con el fin de ayudar a las
            organizaciones a prepararse para el futuro.
          </H5A>
        </CallcenterText>
        <CallcenterImg src={bussines}></CallcenterImg>
      </TapMessageSecond>
      <Services />
      <TapMessage>
        <CallcenterText>
          <H4>Modulos Call Center</H4>
          <H5>
            Crea campañas para ventas, cobranzas, atención al cliente y
            encuestas de manera personalizada, según tus necesidades y monitorea
            en tiempo real
          </H5>
        </CallcenterText>
        <CallcenterImg src={callcenter}></CallcenterImg>
      </TapMessage>
      {/* <Products /> */}
      <Plans />

      <Zimbra />
      <Partners />
      <Contact />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
