import React from "react";
import phonewhite from "../../assets/services/phonewhite.svg";
import mailwhite from "../../assets/services/mailwhite.svg";
import mappin from "../../assets/services/mappin.svg";
import facebook from "../../assets/services/FACEBOOK.svg";
import twitter from "../../assets/services/TWITTER.svg";
import linkend from "../../assets/services/LINKEDIN.svg";
import logo_footer from "../../assets/logo_footer.svg";

import {
  Wrapper,
  PrincipalContainer,
  MiniContainerDirection,
  Container,
  MiniContainer,
  Img,
  Empresa,
  Span,
  SpanBlack,
  ContainerSes,
  ImgS,
  ImgZ,
  Line,
  RedSocia,
} from "./styles";

const Footer = () => (
  <Wrapper>
    <PrincipalContainer>
      <ImgZ src={logo_footer}></ImgZ>
      <Container>
        <MiniContainerDirection>
          <Img src={mappin}></Img>
          Av Ramon Zavala 217 villa sol, distrito de Los Olivos
        </MiniContainerDirection>
        <MiniContainer>
          <Img src={phonewhite}></Img>
          01 701 3658
        </MiniContainer>
        <MiniContainer>
          <Img src={mailwhite}></Img>
          ventas@24d.pe
        </MiniContainer>
      </Container>
    </PrincipalContainer>
    <Line></Line>
    <PrincipalContainer>
      <RedSocia>
        <a
          href="https://www.facebook.com/24DF-Soluciones-107140244448591/"
          target="_blank"
        >
          <ImgS src={facebook}></ImgS>
        </a>
        <ImgS src={twitter}></ImgS>
        <ImgS src={linkend}></ImgS>
      </RedSocia>
      <ContainerSes>
        <MiniContainer>Home</MiniContainer>
        <MiniContainer>Nosotros</MiniContainer>
        <MiniContainer>Servicios</MiniContainer>
        <MiniContainer>Planes</MiniContainer>
        <MiniContainer>Zimbra</MiniContainer>
        <MiniContainer>Asterisk</MiniContainer>
      </ContainerSes>
    </PrincipalContainer>
    <Line></Line>
  </Wrapper>
);

export default Footer;
