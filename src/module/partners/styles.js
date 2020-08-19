import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 300px;
  background: #ffffff;
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
  font-weight: 500;
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
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  overflow-y: scroll;
`;
export const Card = styled.div`
  display: flex;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;
`;
