import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route } from "react-router-dom";

// we must import provider to use redux
import { Provider } from "react-redux";
// alse we import the store
import store from "./reducer/store"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
