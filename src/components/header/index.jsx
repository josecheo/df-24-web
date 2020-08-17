import React from "react";
import LogoBlanco from "../../assets/LogoBlanco.svg";
import Menu from "../menu";
import NavLink from "../navlink";
import { Wrapper, Nav } from "./styles";
import { ServicesCards, SupportCards } from "./data";
const Header = () => {
  return (
    <Wrapper>
      <img alt="LOGO" src={LogoBlanco} />
      <Nav>
        <NavLink text="Home" />
        <NavLink menu data={ServicesCards} text="Servicios" />
        <NavLink menu data={[]} text="Productos" />
        <NavLink mr text="Planes" />
        <NavLink text="Contacto" />
        <NavLink bg data={SupportCards} menu text="Soporte" />
      </Nav>
    </Wrapper>
  );
};

export default Header;
