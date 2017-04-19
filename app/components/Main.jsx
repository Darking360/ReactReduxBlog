import React from 'react'
import _ from 'lodash'

import SearchBar from '../containers/search_bar'

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h3>Boilerplate</h3>
        <SearchBar />
      </div>
    );
  }
};

export default Main;
