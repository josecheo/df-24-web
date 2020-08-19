import React from "react";
import LogoBlanco from "../../assets/LogoBlanco.svg";
import NavLink from "../navlink";
import { Wrapper, Nav } from "./styles";
import { ServicesCards, SupportCards } from "./data";
const Header = () => {
  return (
    <Wrapper>
      <img alt="LOGO" src={LogoBlanco} />
      <Nav>
        <NavLink text="Home" />
        <a href="#services">
          <NavLink menu data={ServicesCards} text="Servicios" />
        </a>
        <a href="#planes">
          <NavLink mr text="Planes" />
        </a>
        <a href="#contacto">
          <NavLink text="Contacto" />
        </a>

        <NavLink bg data={SupportCards} menu text="Soporte" />
      </Nav>
    </Wrapper>
  );
};

export default Header;
