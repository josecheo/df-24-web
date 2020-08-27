import styled, { css } from "styled-components";
import {
  color,
  borderRadius,
  margin,
  layout,
  width,
  fontSize,
  fontWeight,
  height,
  background,
  space,
  typography,
  justifyContent,
} from "styled-system";

export const Wrapper = styled.section`
  display: flex;
  margin-top: 140px;
  position: relative;
  width: 100vw;
  background: #ffffff;
`;

export const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  width: 100%;
  height: 100%;
  /* margin-top: 60px; */
  margin-bottom: 130px;
  background: ${(props) => props.theme.colors.gray};
  @media (max-width: 425px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.black};
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 425px) {
    text-align: center;
  }
  @media (max-width: 320px) {
    font-size: 1.7rem;
  }
`;
export const Img = styled.img`
  width: 400px;
`;
export const ImgContainer = styled.img`
  height: 100px;
`;

export const TextX = styled.div`
  font-family: "Montserrat", sans-serif;
  margin-top: 80px;
  color: ${(props) => props.theme.colors.black};
  font-size: 1.6rem;
  font-weight: 600;
  @media (max-width: 425px) {
    text-align: center;
  }
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
  ${width}
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    padding: 0px;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 425px) {
    margin-top: 10px;
  }
`;

export const PlanCard = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 20px;
  flex-direction: column;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 300px;
  height: 500px;
  /* background-image: -webkit-linear-gradient(90deg, #9c8df1, #7f29f0); */
  ${background}

  margin-right: 30px;
  ${space};
  box-shadow: 10px 10px 21px -6px rgba(0, 0, 0, 0.42);
  transition: box-shadow 0.4s;
  &:hover {
    box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.32);
  }
  /* @media (max-width: 1440px) {
    margin-top: 40px;
  } */
  @media (max-width: 425px) {
    margin-top: 40px;
    margin-right: 0px;
  }
  /* @media (max-width: 425px) {
    height: 900px;
  } */
`;
export const PlandCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: transparent;
  /* align-items: center; */
  justify-content: center;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #ff7f00;
  @media (max-width: 425px) {
    width: 100%;
    /* font-size: 0.7rem; */
  }
`;

export const TitleX = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7px;
  height: 30px;
  width: 99%;
  padding: 0px 10px;
  border-radius: 3px;
  background: #ffffff;
  font-family: "Montserrat", sans-serif;
  box-shadow: 5px 5px 21px -6px rgba(0, 0, 0, 0.42);
  font-weight: regular;
  font-size: 0.9rem;
  color: #000000;
  @media (max-width: 425px) {
    width: 100%;
    font-size: 0.7rem;
  }
`;

export const P = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  font-size: 1rem;
  margin-top: 5px;
  color: black;
  max-width: 100%;
  @media (max-width: 425px) {
    text-align: center;
  }
`;
export const PS = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  font-size: 1rem;
  margin-top: 5px;
  color: blacks;
  max-width: 100%;
  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const Shape = styled.div`
  position: absolute;
  top: 158px;
  width: 0;
  height: 0;
  border-left: 300px solid transparent;
  border-top: 50px solid transparent;
  border-bottom: 95px solid #fff;
  z-index: 1290;
  @media (max-width: 375px) {
    border-left: 283px solid transparent;
  }
  @media (max-width: 320px) {
    border-left: 234px solid transparent;
  }
`;

export const WhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding: 30px;
  align-items: center;
`;

export const EspecialCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  width: 300px;
  height: 240px;
  background: white;
  margin-top: 20px;
  border-radius: 30px;
  transition: background 0.4s;
  &:hover p {
    color: ${(props) => props.theme.colors.white};
  }
  &:hover h2 {
    color: ${(props) => props.theme.colors.white};
  }
  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
  &:hover img {
    transform: scale(1.3);
  }
`;

export const EspecialText = styled.h2`
  transition: color 0.4s;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.semiblack};
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 375px) {
    text-align: center;
  }
`;
export const EspecialP = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  font-size: 1rem;
  transition: color 0.4s;
  text-align: center;
  color: ${(props) => props.theme.colors.semiblack};
  max-width: 100%;
  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

export const EspecialImg = styled.img`
  width: 60px;
  transition: transform 0.4s;
  margin-bottom: 20px;
`;
