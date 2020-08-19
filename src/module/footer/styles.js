import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 400px;
  background: #0d1e30;
  padding: 30px;
`;

export const PrincipalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  align-items: center;
  width: 70%;
  height: 100%;
`;
export const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
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
  width: 100%;
  padding: 5px 50px;
  height: 50px;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 10px;
  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;
export const MiniContainerDirection = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 50px;
  height: 100px;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 10px;
  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;
export const Empresa = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const RedSocia = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 70%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
export const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.9rem;
  font-weight: 400;
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
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  z-index: 20;
`;
