import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import ReduxPromise from 'redux-promise'
import {Provider} from "react-redux"
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import routes from './routes'

//Load foundation
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('style-loader!css-loader!./css/app.css');

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  ,
  document.getElementById("app")
);
