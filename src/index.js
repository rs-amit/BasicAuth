import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainProvider from "./contextProvider/MainProvider"

ReactDOM.render(
  <MainProvider>
    <App />
  </MainProvider>,
  document.getElementById('root')
);
