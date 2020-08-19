import styled, { css } from "styled-components";
import telefonoIP from "../../assets/services/telefonoIP.jpg";
import servidores from "../../assets/services/servidores.jpg";
import camaras from "../../assets/services/102244137_caamara.jpg";
import impresoras from "../../assets/services/impresora.jpg";
import laptos from "../../assets/services/laptop-2557586_1920.jpg";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  /* height: 100vh; */
  background: ${(props) => props.theme.colors.white};
`;
export const Shape = styled.div`
  position: absolute;
  opacity: 0.2;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 99.8vw solid transparent;
  border-top: 50px solid transparent;
  border-bottom: 600px solid #ebf2f9;
  z-index: 1;
`;

export const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.gray};
`;

export const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.black};
  font-size: 3rem;
  font-weight: 600;
`;

export const P = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 5px;
  color: ${(props) => props.theme.colors.semiBlack};
`;

export const Line = styled.div`
  display: flex;
  width: 104px;
  margin-top: 20px;
  border-bottom: 3px solid #b7b7b7;
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  margin-top: 20px;
  width: 97%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  z-index: 20;
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  padding: 60px;
  /* justify-content: center;
  align-items: center; */
  width: 25%;
  height: 500px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: transform 0.4s;
  /* &:hover {
    transform: scale(1.03);
  } */
  /* ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
  } */
`;
export const BorderCards = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  /* background-color: rgba(0, 0, 0, 0.3); */
`;

export const TextCards = styled.div`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 3rem;
  font-weight: 600;
`;
