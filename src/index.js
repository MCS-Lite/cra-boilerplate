/* eslint no-unused-expressions:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import 'normalize.css';

injectGlobal`
  html {
    font-size: ${theme.base.fontSize};
    line-height: ${theme.base.lineHeight};
  }

  body {
    background-color: ${theme.base.bodyBackgroundColor};
    color: ${theme.base.bodyColor};
    margin: 0;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
