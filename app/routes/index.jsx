import React from 'react'
import Main from 'Main'
import PostsIndex from '../components/posts_index'
import PostNew from '../components/post_new'
import { Route, IndexRoute } from 'react-router'

export default(
  <Route path="/" component={Main} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/">
      <Route path="new" component={PostNew}></Route>
    </Route>
  </Route>
);
