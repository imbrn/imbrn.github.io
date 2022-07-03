import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap');

  :root {
    --color-background: #0C0C0C;
    --color-foreground: #f2f2f2;
    --color-primary: #00FF33;
    --color-secondary: #0099FF;
    --color-text: #fff;
    --font-sans-serif: 'Open Sans', sans-serif;
    --radius-small: 6px;
    --next--color-primary: #00ff5f;
    --v8n--color-primary: #4caf50;
    --blog--color-primary: #59f879;
    --twitter--color-primary: #1a8cd8;
  }

  html {
    background: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans-serif);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }

  a {
    color: inherit;
  }
`;
