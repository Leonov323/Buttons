import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap');
  html, body {
    margin: 0;
    padding: 0;  
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }
  *, *::after, *::before {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    text-rendering: optimizeLegibility;
    width: 100vw;
    overflow-x: hidden !important;
  }

  img, button {
  user-select: none;
}

footer{
  background-color: rgb(84, 84, 84);
  color: rgb(255, 255, 255);
  letter-spacing: 3px;
  height: 5vh;
  text-align: center;
}

.black-border {
  border: 1px solid black;
}

.overflow-x-hide {
  overflow-x: hidden !important;
}
  `;
