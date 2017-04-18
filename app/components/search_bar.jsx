import React from 'react'

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };
  }
  render(){
    return(
      <div className="col-sm-12">
        <input value={this.state.searchText} onChange={ (event) => { this.onInputChange(event.target.value) } }/>
      </div>
    );
  }
  onInputChange(term){
    this.setState({
      searchText: term
    });

    this.props.search(term);
  }
}

export default SearchBar;
