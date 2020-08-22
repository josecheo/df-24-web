import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    width: 100%;
    justify-content: flex-start;
  }
  /* @media (max-width: 320px) {
    font-size: 2rem;
  } */
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  width: 300px;
  position: absolute;
  height: 300px;
  background: red;
  top: 36px;
  border-radius: 8px;
  right: 0px;
`;
export const ResponsiMode = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    display: flex;
  }
`;
