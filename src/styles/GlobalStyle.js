import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
  all: unset;
  display: revert;
}

*,
*::before,
*::after{
  box-sizing: border-box;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
}

table {
  border-collapse: collapse;
}
`;

export default GlobalStyle;