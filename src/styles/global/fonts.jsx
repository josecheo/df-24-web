import { css } from "styled-components";

import "../../assets/fonts/Montserrat-Black.ttf";
import "../../assets/fonts/Montserrat-BlackItalic.ttf";
import "../../assets/fonts/Montserrat-Bold.ttf";
import "../../assets/fonts/Montserrat-BoldItalic.ttf";
import "../../assets/fonts/Montserrat-ExtraBold.ttf";
import "../../assets/fonts/Montserrat-ExtraLight.ttf";
import "../../assets/fonts/Montserrat-Medium.ttf";
import "../../assets/fonts/Montserrat-SemiBold.ttf";
import "../../assets/fonts/Montserrat-Regular.ttf";

const fonts = css`
  @font-face {
    font-family: "Montserrat-Medium";
    src: url("/fonts/Montserrat-Medium.ttf");
    src: url("/fonts/Montserrat-Medium.ttf?#iefix") format("embedded-opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat-SemiBold";
    src: url("/fonts/Montserrat-SemiBold.ttf");
    src: url("/fonts/Montserrat-SemiBold.ttf?#iefix")
      format("embedded-opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat-Regular";
    src: url("/fonts/Montserrat-Regular.ttf");
    src: url("/fonts/Montserrat-Regular.ttf?#iefix") format("embedded-opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat-ExtraBold";
    src: url("/fonts/Montserrat-ExtraBold.ttf");
    src: url("/fonts/Montserrat-ExtraBold.ttf?#iefix")
        format("embedded-opentype"),
      url("/fonts/Montserrat-ExtraBold.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export default fonts;
