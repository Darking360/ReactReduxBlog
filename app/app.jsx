import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'

import {Provider} from "react-redux"

//Load foundation
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>
  ,
  document.getElementById("app")
);
