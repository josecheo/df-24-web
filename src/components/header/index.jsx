import React from "react";
import LogoBlanco from "../../assets/LogoBlanco.svg";
import NavLink from "../navlink";
import { Wrapper, Nav, ResponsiMode } from "./styles";
import { ServicesCards, SupportCards } from "./data";
import { width } from "styled-system";
const Header = () => {
  return (
    <Wrapper>
      <img alt="LOGO" src={LogoBlanco} width="200px" />
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
      <ResponsiMode>
        <NavLink bg data={SupportCards} menu text="Contacto" />
      </ResponsiMode>
    </Wrapper>
  );
};

export default Header;
