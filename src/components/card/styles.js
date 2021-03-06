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
  border-radius: 20px;
  padding: 20px 20px 20px 0px;
  ${width}
  ${height}
  background:white;
  margin-top: 20px;
  box-shadow: 10px 10px 21px -6px rgba(0, 0, 0, 0.42);
  transition: transform 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
  @media (max-width: 425px) {
    padding: 10px 10px 10px 0px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Circle = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  padding: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 100%;
  height: 65%;
  margin-left: -60px;
  background: ${(props) => props.bg};
  @media (max-width: 425px) {
    padding: 30px;
    height: 55%;
  }
  @media (max-width: 320px) {
    height: 44%;
    padding: 15px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 40px; */
  width: 87%;
  border-radius: 4px;
  background: #ebf2f9;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 5px;
  margin-bottom: 15px;
  @media (max-width: 425px) {
    background: transparent;
  }
`;

export const P = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  font-size: 0.6rem;
  color: ${(props) => props.theme.colors.black};
  max-width: 100%;
  @media (max-width: 425px) {
    font-size: 0.6rem;
  }
`;
// export const PS = styled.p`
//   font-family: "Montserrat", sans-serif;
//   font-weight: medium;
//   font-size: 0.6rem;
//   color: ${(props) => props.theme.colors.black};
//   max-width: 100%;
//   @media (max-width: 425px) {
//     font-size: 0.6rem;
//   }
// `;
