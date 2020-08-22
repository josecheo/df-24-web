import styled, { css } from "styled-components";
import callcenter from "../../assets/CALLCENTER.svg";
import PcImg from "../../assets/PcImg.svg";
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

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${(props) => props.theme.colors.primary};
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const Shape = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 100vw solid transparent;
  border-top: 50px solid transparent;
  border-bottom: 395px solid #fff;
  z-index: 1;
  @media (max-width: 1024px) {
    border-bottom: 325px solid #fff;
  }
  @media (max-width: 768px) {
    border-bottom: 605px solid #fff;
  }
  @media (max-width: 425px) {
    border-bottom: 305px solid #fff;
  }
`;

export const PrincipalContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 80px 1fr;
  grid-gap: 8px;
  padding: 30px;
  z-index: 210;
  @media (max-width: 425px) {
    height: 100vh;
  }
  @media (max-width: 320px) {
    padding: 10px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 90vh 70vh;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const SecondContainerImg = styled.div`
  display: flex;
  background-image: url(${(props) => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 90px;
  width: 100%;
  animation-name: aparecer;
  animation-duration: 3s;
  @keyframes aparecer {
    from {
      opacity: 0;

      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const SecondContainerImgPc = styled.div`
  display: flex;
  background-image: url(${(props) => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 90px;
  width: 100%;
  animation-name: aparecer;
  animation-duration: 3s;
  @keyframes aparecer {
    from {
      opacity: 0;

      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Text = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 3.2rem;
  font-weight: 600;
  @media (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
    margin-left: 50px;
  }
  @media (max-width: 425px) {
    font-size: 2.5rem;
    margin-left: 0px;
  }
  @media (max-width: 375px) {
    font-size: 2.2rem;
  }
  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;

export const Spam = styled.span`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.yellow};
  font-size: 3.2rem;
  font-weight: 600;
  @media (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
    /* margin-left: 50px; */
  }
  @media (max-width: 425px) {
    font-size: 2.5rem;
    margin-left: 0px;
  }
  @media (max-width: 375px) {
    font-size: 2.2rem;
  }
  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    margin-left: 200px;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const TapMessage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  /* margin-bottom: 60px; */
  height: 500px;
  padding: 40px;
  grid-gap: 8px;
  background: rgba(235, 242, 249, 0.2);
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
  /* position: absolute; */
`;

export const CallcenterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 150px;
  width: 80%;
  padding: 40px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
  @media (max-width: 1024px) {
    margin-left: 20px;
  }
  @media (max-width: 425px) {
    padding: 10px;
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;

export const H4 = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 23px;
  font-weight: 400;
  color: #8493b4;
  margin-bottom: 20px;
`;

export const H5 = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #8493b4;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const CallcenterImg = styled.img`
  width: 100%;
  height: 100%;
`;
