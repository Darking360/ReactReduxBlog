import Axios from 'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=asdasdasddasd';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

export function fetchPosts(){

  const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(data){
  const request = Axios.post(`${ROOT_URL}/posts${API_KEY}`,data);

  return{
    type: CREATE_POST,
    payload: request
  };
}
