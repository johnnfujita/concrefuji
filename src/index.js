import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom"
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

let app = document.getElementById('root');

if (app) {
  const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
  if (path) {
    history.replace(path);
  }
}

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>,
  app
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
