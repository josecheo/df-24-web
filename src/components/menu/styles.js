import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 80%;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
  }
  display: flex;
  width: 460px;
  position: absolute;
  background: #ffffff;
  top: 42px;
  right: 0px;
  border-radius: 8px;
  animation-duration: 0.3s;
  animation-name: aparecer;
  @keyframes aparecer {
    from {
      opacity: 1;

      transform: scale(1, 0.75);
    }
    to {
      opacity: 1;
      margin-bottom: 0px;
      transform: scaleY(1, 1);
    }
  }
  ${(props) =>
    props.animateHidden &&
    css`
      animation-duration: 0.28s;
      animation-name: hidden;
      animation-fill-mode: forwards;
      @keyframes hidden {
        from {
          opacity: 1;
          margin-bottom: 0px;
          transform: scale(1);
        }
        to {
          opacity: 0;
          margin-bottom: 20px;
          transform: scale(0);
        }
      }
    `};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  height: 80px;
  padding: 10px;
  transition: background 0.5s;
  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`;
export const Circle = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  padding: 10px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background: ${(props) => props.bg};
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
  font-weight: 700;
`;
export const P = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.semiBlack};
`;
