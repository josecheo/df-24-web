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
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${(props) => props.theme.colors.primary};
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
`;

export const PrincipalContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 80px 1fr;
  grid-gap: 8px;
  padding: 30px 120px 0px 120px;
  z-index: 210;
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 8px;
  padding-top: 90px;
  grid-template-columns: 1fr 1fr;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: flex-start;
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
  width: 90%;
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
`;

export const SecondContainerImgPc = styled.div`
  display: flex;
  background-image: url(${(props) => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: flex-end;
  width: 90%;
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
`;

export const ContainerText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Text = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 3.9rem;
  font-weight: 600;
`;

export const Spam = styled.span`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.yellow};
  font-size: 3.9rem;
  font-weight: 600;
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
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

  /* position: absolute; */
`;

export const CallcenterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 150px;
  width: 80%;
  padding: 40px;
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
`;

export const CallcenterImg = styled.img`
  width: 100%;
  height: 100%;
`;
