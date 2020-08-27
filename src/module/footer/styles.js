import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 300px;
  background: #0d1e30;
  padding: 30px;
  @media (max-width: 425px) {
    height: auto;
  }
`;

export const PrincipalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  align-items: center;
  width: 70%;

  @media (max-width: 1440px) {
    width: 85%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
  }
`;
export const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

export const ImgZ = styled.img`
  @media (max-width: 768px) {
    width: 230px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgS = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MiniContainer = styled.div`
  display: flex;
  width: auto;
  padding: 10px 10px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.7rem;
  font-weight: 400;
  border-radius: 10px;
  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
  @media (max-width: 320px) {
    padding: 10px;
    font-size: 0.5rem;
  }
`;
export const MiniContainerDirection = styled.div`
  display: flex;
  width: auto;
  padding: 10px 10px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.7rem;
  font-weight: 400;
  border-radius: 10px;
  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
  @media (max-width: 1024px) {
    max-width: 300px;
  }

  @media (max-width: 320px) {
    padding: 10px;
    font-size: 0.5rem;
  }
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;
export const Empresa = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media (max-width: 425px) {
    display: none;
  }
`;
export const RedSocia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 70%;
  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
export const ContainerSes = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 425px) {
  }
`;

export const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.9rem;
  font-weight: 400;
  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
`;

export const SpanBlack = styled.div`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.97rem;
  font-weight: 600;
`;

export const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.black};
  font-size: 3rem;
  font-weight: 600;
`;

export const P = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 5px;
  color: ${(props) => props.theme.colors.semiBlack};
`;

export const Line = styled.div`
  width: 70%;
  border-bottom: 1px solid #b7b7b7;
  @media (max-width: 1440px) {
    width: 85%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 425px) {
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  z-index: 20;
`;
