import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 300px;
  background: #ffffff;
  @media (max-width: 1024px) {
    height: 700px;
  }
  @media (max-width: 425px) {
    height: 800px;
  }
`;

export const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.black};
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: 425px) {
    text-align: center;
    font-size: 2.7rem;
  }
`;

export const P = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 5px;
  color: ${(props) => props.theme.colors.semiBlack};
  @media (max-width: 425px) {
    text-align: center;
    font-size: 0.7rem;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    width: 70%;
  }
  @media (max-width: 425px) {
    width: 100%;
    justify-content: space-around;
  }
`;
export const Card = styled.div`
  display: flex;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;
  @media (max-width: 425px) {
    margin-left: 0px;
  }
`;
