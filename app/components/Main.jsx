import React from 'react'
import _ from 'lodash'

import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
};

export default Main;
