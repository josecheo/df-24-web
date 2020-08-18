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
  typography,
  justifyContent,
} from "styled-system";

export const ContainerInput = styled.div`
  ${width}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  appearance: none;
  position: relative;
  ${height}
  margin-top:5px;
`;

export const StyledInput = styled.input`
  width: 100%;
  appearance: none;
  color: #a6a6a6;
  line-height: 1.5;
  height: 44px;
  padding: .75rem 0.8rem;
  border: 1px solid #D8D8D8;
  transition: box-shadow 0.3s;
  border-radius:8px;
  font-family: "Montserrat", sans-serif;
 
  ${(props) =>
    props.planeText &&
    css`
      border: 0;
      padding-left: 0;
      padding-right: 0;
      pointer-events: none;
    `}

  &:focus-within {
    box-shadow: 0 0 4px ${(props) => props.theme.colors.primary}; 
  }
  &:disabled {
    opacity: 0.3;
    border: 1px solid #dedede;
  }
  ${borderRadius}
  ${color}
  ${fontSize}
  ${layout}
  ${typography}
  ${fontWeight}
`;
