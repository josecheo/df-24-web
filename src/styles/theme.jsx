const colors = {
  primary: "#FF7F00",
  secondary: "#DD6707",
  default: "#F9F9FB",
  white: "#FFFFFF",
  black: "#000000",
  grayblue: "#EBF2F9",
  semiBlack: "#B7B7B7",
  yellow: "#F9D41C",
};

const fonts = {
  primary: "Montserrat-Medium, sans-serif",
  secondary: "Montserrat-SemiBold, sans-serif",
  regular: "Montserrat-Regular, sans-serif",
  extrabold: "Montserrat-ExtraBold, sans-serif",
};

const breakpoints = ["1025px", "1367px", "1441px", "1601px"];

breakpoints.sm = breakpoints[0]; // 1025px >= width <= 1366px
breakpoints.md = breakpoints[1]; // 1367px >= width <= 1440px
breakpoints.lg = breakpoints[2]; // 1441px >= width <= 1600px
breakpoints.xl = breakpoints[3]; // 1601px >

export default {
  colors,
  breakpoints,
  fonts,
};
