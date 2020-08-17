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

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  /* height: 100vh; */
  background: #f9fbff;
`;

export const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 60px;
  margin-bottom: 130px;
  background: ${(props) => props.theme.colors.gray};
`;

export const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.black};
  font-size: 2rem;
  font-weight: 600;
`;

export const TextX = styled.div`
  font-family: "Montserrat", sans-serif;
  margin-top: 80px;
  color: ${(props) => props.theme.colors.black};
  font-size: 2rem;
  font-weight: 600;
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
  ${width}
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  position: relative;
  width: 300px;
  height: 700px;
  ${background}
  margin-top: 40px;
  ${space};
  box-shadow: 10px 10px 21px -6px rgba(0, 0, 0, 0.42);
  transition: box-shadow 0.4s;
  &:hover {
    box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.32);
  }
`;
export const PlandCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 30px;
  align-items: center;
`;
export const Title = styled.h3`
  display: flex;
  margin-left: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const TitleX = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  height: 30px;
  width: 80%;
  border-radius: 4px;
  background: #ffffff;
  font-family: "Montserrat", sans-serif;
  box-shadow: 5px 5px 21px -6px rgba(0, 0, 0, 0.42);
  font-weight: regular;
  font-size: 0.9rem;
  color: #000000;
`;

export const P = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  font-size: 0.95rem;
  margin-top: 5px;
  color: ${(props) => props.theme.colors.semiblack};
  max-width: 100%;
`;
export const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  font-size: 0.95rem;
  margin-top: 5px;
  color: ${(props) => props.theme.colors.primary};
  max-width: 100%;
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
export const Circle = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  padding: 10px;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background: #000000;
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const ContainerTitle = styled.div`
  display: flex;
justify-content:flex-start;
align-items:center;
  padding: 10px;
  width: 100%;
  height: 100%;
  margin-bottom:15px;
  /* background: ${(props) => props.bg}; */
`;

export const EspecialCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 50px 40px;
  margin-right: 30px;
  box-sizing: border-box;
${(props) =>
  props.cursor &&
  css`
    cursor: pointer;
  `}
  ${width}
  ${height}
  background: white;
  margin-top: 20px;
  transition: transform 0.4s;
  border-radius: 20px;
  box-shadow: 0 12px 67px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: scale(1.07);
  }
`;

export const EspecialText = styled.h2`
  transition: color 0.4s;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.semiblack};
  font-size: 1rem;
  font-weight: 600;
`;
export const EspecialP = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  font-size: 1rem;
  transition: color 0.4s;
  text-align: center;
  color: ${(props) => props.theme.colors.semiblack};
  max-width: 100%;
`;

export const EspecialImg = styled.img`
  width: 60px;
  transition: transform 0.4s;
  margin-bottom: 20px;
`;
