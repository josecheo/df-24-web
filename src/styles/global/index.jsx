import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";
import normalize from "./normalize";
import reset from "./reset";
import elements from "./elements";

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${normalize}
  ${reset}
  ${elements}
`;
export default GlobalStyle;
