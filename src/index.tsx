import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalContextProvider } from './contexts/GlobalContext';
import { MusicPlayerContextProvider } from './contexts/MusicPlayerContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <MusicPlayerContextProvider>
        <App />
      </MusicPlayerContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
