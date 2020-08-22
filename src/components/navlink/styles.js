import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 107px;
  height: 41px;
  position: relative;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.bg &&
    css`
      background: ${(props) => props.theme.colors.secondary};
      border-radius: 10px;
    `};
  ${(props) =>
    props.mr &&
    css`
      margin-right: 70px;
    `};
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 20px;
  }
`;
export const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: 550;
  transition: color 0.2s;
  cursor: pointer;
  ${(props) =>
    props.showMenu &&
    css`
      color: #f9d41c;
    `};
`;

export const Arrow = styled.div`
  width: 0;
  height: 0;
  margin-left: 2px;
  margin-top: 4px;
  border-right: 5px solid transparent;
  border-top: 5px solid #ffffff;
  border-left: 5px solid transparent;
  border-bottom: 5px solid transparent;

  ${(props) =>
    props.showMenu &&
    css`
      border-top: 5px solid #f9d41c;
    `};
`;
