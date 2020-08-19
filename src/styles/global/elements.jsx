import { css } from "styled-components";

const elements = css`
  input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-input-file {
    color: transparent;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: Montserrat-Medium, sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.25;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li,
  div {
    line-height: 1.25;
  }

  p {
    margin-bottom: 1.15em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  a {
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;
    transition: all 200ms ease;
  }

  button {
    border: 0;
    outline: 0;
    padding: 0;
    text-align: center;
    box-shadow: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    background-color: $transparent;
    transition: all 250ms ease;
  }

  img {
    max-width: 100%;
    display: block;
    height: auto;
  }

  ul {
    list-style-type: none;
  }

  button,
  input,
  select,
  textarea,
  label,
  a {
    outline: 0;
    box-shadow: none;
    -webkit-tap-highlight-color: $transparent;

    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }

  textarea {
    height: auto !important;
    resize: none;
  }

  ::-webkit-scrollbar {
    width: 0.3rem;
    height: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px white;
    border-radius: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ff7f00;
    border-radius: 2px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #ff7f00;
  }

  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    margin-bottom: 25px;
    width: 2.5em;
    height: 2.5em;
    z-index: 10;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }
  .loader {
    color: #fff;
    font-size: 5px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
  }
  .loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 3.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }

  //***** CALENDAR ELEMENTS

  .CalendarDay {
    border: none;
    padding: 2px;
    &:before: {
      content: "";
      border: 1px solid white;
    }
    &:hover {
      border: none;
    }
  }

  .CalendarDay__selected,
  CalendarDay__selected_start,
  .CalendarDay__selected_end {
    background: #21569d;
    &:hover {
      background: #e4e7e7;
      color: #21569d;
    }
  }

  .CalendarDay__hovered_span {
    color: white;
    background: #40bbf5;
    &:hover {
      background: #21569d;
      color: white;
    }
  }
  [class*="CalendarDay__selected_span"] {
    background: #40bbf5;
    &:hover {
      background: #e4e7e7;
      color: #21569d;
    }
  }

  .CalendarMonth_caption > strong {
    text-transform: capitalize;
  }

  .DayPicker {
    border-radius: 10px;
    overflow: hidden;
  }

  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }

  .introjs-helperNumberLayer {
    display: none;
  }

  .introjs-bullets {
    display: none;
  }

  .introjs-arrow {
    &.left {
      border-right-color: #007ad1 !important;
    }
    &.right {
      border-left-color: #007ad1 !important;
    }
    border-bottom-color: #007ad1 !important;
  }

  .introjs-tooltipbuttons {
    a {
      color: #007ad1;
      border: 0.6px solid #d5d5d5;
    }
  }
`;

export default elements;
