import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
root.render(
  application
);