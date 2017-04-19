import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import ReduxPromise from 'redux-promise'

import {Provider} from "react-redux"

import reducers from './reducers'

import { createStore, applyMiddleware } from 'redux'

//Load foundation
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('style-loader!css-loader!./css/app.css');

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>

      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById("app")
);
