import React from 'react'

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
    console.log("Submited");
  }

  render(){
    return(
      <form onSubmit={() => this.onFormSubmit(event)} className="input-group">
        <input placeholder="Search for a city weather" value={this.state.searchText} className="form-control" onChange={this.onInputChange}/>
        <button type="submit" className="btn btn-secondary">Search</button>
      </form>
    );
  }
};

export default SearchBar;
