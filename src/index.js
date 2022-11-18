import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Publications from "./Publications.js";
import CV from './CV.js';
import Art from './Art.js';
import reportWebVitals from './reportWebVitals';

import { HashRouter, Route, Switch } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/publications" component={Publications} />
    <Route path='/art' component={Art} />
    <Route path='/cv' component={CV} />
  </Switch>
  </HashRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
