import React from 'react';
import ReactDOM from 'react-dom/client';
import GuessNumber from './GuessNumber';
import './style/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GuessNumber />
  </React.StrictMode>
);
