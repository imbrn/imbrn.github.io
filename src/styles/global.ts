import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap');

  :root {
    --color-background: #0C0C0C;
    --color-foreground: #f2f2f2;
    --color-text: #fff;
    --font-sans-serif: 'Open Sans', sans-serif;
  }

  html {
    background: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans-serif);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
`;
