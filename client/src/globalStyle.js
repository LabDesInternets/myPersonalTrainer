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
  div{
    box-sizing: border-box; 
    overflow:scroll;
  }
  h1{
    font-size: calc(2.5rem + 0.8vw);
    font-weight:500;
    padding: 1.5rem 1rem;
  }
  h2 {
    font-size: calc(1rem + 0.6vw);
    font-weight: 550;
  }
  h3 {
    font-size: calc(0.9rem + 0.5vw);
    font-weight: 550;
  }
  h4 {
    font-size: calc(0.8rem + 0.5vw);
    font-weight: 450;
  }
  svg {
    cursor: pointer;
  }
  p {
  text-align: justify;
  text-justify: inter-word;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

export default GlobalStyle
