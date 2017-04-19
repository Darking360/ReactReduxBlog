import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'

import {Provider} from "react-redux"

var store = require("./store/configStore").configure();

//Load foundation
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>

      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById("app")
);
