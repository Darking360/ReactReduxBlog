import React from 'react'
import _ from 'lodash'

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container">
        Holis
        {this.props.children}
      </div>
    );
  }
};

export default Main;
