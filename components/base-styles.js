import { createGlobalStyle } from "styled-components"
import { colors } from "constants"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  :root {
    font-size: 12px;
  }
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  body {
    background: ${colors.grey_300};
    color: ${colors.blue_900};
    font-family: "Rubik", sans-serif;
    font-size: 1.5rem;
  }
  h1, h2, h3, p, a, ul {
    margin: 0;
    line-height: 1.5;
  }
  h1 {
    font-size: 3rem;
    font-weight: 300;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  p {
    font-weight: 400;
  }
  .small {
    font-size: 1.25rem;
  }
`
