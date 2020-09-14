import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
body {
  height: 100%;
  max-width:100vw;
  display: flex;
  flex-direction: column;
  font-family:'Dosis', -apple-system, BlinkMacSystemFont, 'Dosis', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight:300;
  line-height: calc(1.5rem + 0.8vw);
  font-size: calc(0.8rem + 0.5vw);
  box-sizing: border-box;
  h1{
    font-size: calc(2.5rem + 0.8vw);
    font-weight:500;
    padding: 1.5rem 1rem;
  }
  h3 {
    font-size: calc(0.9rem + 0.6vw);
    font-weight: 550;
  }
  svg {
    cursor: pointer;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

export default GlobalStyle
