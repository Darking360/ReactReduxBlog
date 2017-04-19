var redux = require("redux");
import rootReducer from "../reducers"

export var configure = () => {

  var store = redux.createStore(rootReducer);

  return store;

};
