import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import App from './App';
import { GlobalContextProvider } from './contexts/GlobalContext';
import { MusicPlayerContextProvider } from './contexts/MusicPlayerContext';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <MusicPlayerContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MusicPlayerContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
