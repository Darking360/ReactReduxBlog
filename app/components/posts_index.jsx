import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router'

class PostsIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log("This shows before component actually renders");
    this.props.fetchPosts();
  }
  render(){
    return(
      <div>
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add Post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
};

function mapStateToProps(state){
  return{ posts: state.posts }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPosts: fetchPosts },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);
