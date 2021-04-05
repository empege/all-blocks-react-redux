import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context';

import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
const initialStore = {
  proba1: 1,
  proba2: 2,
}
const store = createStore(reducer, initialStore);
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
