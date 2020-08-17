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
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${background};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  transition-delay: 0.1s;
  transition-duration: 0.2s;
  transition-property: transform;
  ${space}
  cursor: pointer;
  &:hover {
    transform: scale(0.96);
  }
`;

export const Text = styled.div`
  transition: color 0.2s;
  ${color};
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 550;
`;
