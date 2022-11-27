import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TransactionProvider } from './context/TransacionContext';
//wire income dinosaur nothing turn easily wave accident poem east deer crowd

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TransactionProvider>
    <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </TransactionProvider>
);

