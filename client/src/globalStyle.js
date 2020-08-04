import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
body {
  font-family:'Dosis', -apple-system, BlinkMacSystemFont, 'Dosis', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight:300;
  line-height:1.5;
  font-size: 1.75vw;
  h1{
    font-size:2.75rem;
    font-weight:400;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

export default GlobalStyle
