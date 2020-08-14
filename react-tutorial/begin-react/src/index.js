import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ContextSample from './ContextSample';

// DOM에서 id가 root인 애를 찾아서 react App을 넣겠다.
ReactDOM.render(
  <React.StrictMode>
    <ContextSample />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
