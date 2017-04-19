import React from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions'
import { bindActionCreators } from 'redux'

const API_KEY = "8e12de913f0fd73b65fe066c9c4aad73";

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };

    this.onInputChange = this.onInputChange.bind(this);

  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({searchText: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.searchText);
  }

  render(){
    return(
      <div className="col-md-12" style={ { "margin" : 5 } }>
        <form onSubmit={() => this.onFormSubmit(event)} className="input-group">
          <input placeholder="Search for a city weather" value={this.state.searchText} className="form-control" onChange={this.onInputChange}/>
          <div className="input-group-btn">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather },dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
