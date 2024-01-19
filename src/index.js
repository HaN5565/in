import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import stateFrance from './state/stateFrance';
import stateGermany from './state/sateGermany';
import stateEngland from './state/stateEngland';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App stateEngland={stateEngland} stateGermany={stateGermany} stateFrance={stateFrance} />
    </BrowserRouter>
  </React.StrictMode>
);
