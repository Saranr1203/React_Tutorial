import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Fun from './Fun';
import Fun1 from './Fun1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Fun />
    <Fun1 />
  </React.StrictMode>
);