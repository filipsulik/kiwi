import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';

import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/font/Poppins-Black.ttf');
    font-weight: 900;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/font/Poppins-ExtraBold.ttf');
    font-weight: 800;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/font/Poppins-Bold.ttf');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/font/Poppins-SemiBold.ttf');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/font/Poppins-Medium.ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/font/Poppins-Regular.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/font/Poppins-Light.ttf');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/font/Poppins-ExtraLight.ttf');
    font-weight: 200;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/font/Poppins-Thin.ttf');
    font-weight: 100;
  }

  * {
    font-family: Poppins, sans-serif;
  }
  p {
    margin: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
