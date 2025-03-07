import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


const application = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
root.render(
  application
);