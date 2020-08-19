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
  position: relative;
  width: 100vw;
  /* height: 100vh; */
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
  /* margin-bottom: 130px; */
  background: ${(props) => props.theme.colors.gray};
`;

export const Text = styled.div`
  font-family: "Montserrat", sans-serif;
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

export const Title = styled.h3`
  display: flex;
  margin-left: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
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
    &:hover #as {
     background: ${(props) => props.theme.colors.primary};
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CallcenterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 40px;
`;

export const H4 = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 23px;
  font-weight: 400;
  color: #8493b4;
`;

export const H5 = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #8493b4;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 110%;
  height: 400px;
  box-shadow: 10px 10px 21px -6px rgba(0, 0, 0, 0.42);
  padding: 40px;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
