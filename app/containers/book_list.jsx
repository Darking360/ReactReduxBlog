import React from 'react'
import { connect } from 'react-redux'

import { selectBook } from '../actions'

import { bindActionCreators } from 'redux'

class BookList extends React.Component {
  constructor(props){
    super(props);
  }
  renderList(){
    console.log(this.props);
    return this.props.books.map( (book) =>{
      return( <li onClick={ () => { this.props.selectBook(book) } } key={book.title} className="list-group-item">{book.title}</li> );
    });
  }
  render(){
    return(
      <div>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state){
  return{
    books: state.books
  };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectBook: selectBook }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
