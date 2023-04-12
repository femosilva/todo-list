import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  button, a {
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }
  body, button, input, textarea { 
    font-family: 'Open Sans', sans-serif;
  }
  body { 
    -webkit-font-smoothing: antialase;
  }
  [disabled] {
    opacit: 0.6;
  }
`

export default GlobalStyles
