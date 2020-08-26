import React from "react";
import phonewhite from "../../assets/services/phonewhite.svg";
import mailwhite from "../../assets/services/mailwhite.svg";
import mappin from "../../assets/services/mappin.svg";
import facebook from "../../assets/services/FACEBOOK.svg";
import twitter from "../../assets/services/TWITTER.svg";
import linkend from "../../assets/services/LINKEDIN.svg";

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
  ImgS,
  RedSocia,
} from "./styles";

const Footer = () => (
  <Wrapper>
    <PrincipalContainer>
      <Container>
        <MiniContainer>
          <Img src={phonewhite}></Img>
          01 701 3658
        </MiniContainer>
        <MiniContainer>
          <Img src={mailwhite}></Img>
          ventas@24d.pe
        </MiniContainer>
        <MiniContainerDirection>
          <Img src={mappin}></Img>
          Av Ramon Zavala 217 villa sol, distrito de Los Olivos
        </MiniContainerDirection>
      </Container>

      <Empresa>
        <SpanBlack>Compañia</SpanBlack>
        <Span>Quienes somos</Span>
        <Span>Lo nuevo</Span>
        <Span>FAQ</Span>
        <Span>Contacto</Span>
      </Empresa>

      <Empresa>
        <SpanBlack>Servicios</SpanBlack>
        <Span>Soluciones telefonicas</Span>
        <Span>Soluciones Opensource</Span>
        <Span>Correos corporativos</Span>
        <Span>Servidores de red</Span>
        <Span>Video conferencias</Span>
        <Span>Seguridad perimetral</Span>
      </Empresa>

      <RedSocia>
        <ImgS src={facebook}></ImgS>
        <ImgS src={twitter}></ImgS>
        <ImgS src={linkend}></ImgS>
      </RedSocia>
    </PrincipalContainer>
  </Wrapper>
);

export default Footer;
