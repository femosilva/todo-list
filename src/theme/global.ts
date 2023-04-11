import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  // html {
  //   @media (max-width: 1080px) {
  //     font-size: 93.75%
  //   }
  //   @media (max-width: 720px) {
  //     font-size: 87.5%
  //   }
  // }
  button, a {
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }
  body { 
    -webkit-font-smoothing: antialase;
  }
  [disabled] {
    opacit: 0.6;
  }
`

export default GlobalStyles
