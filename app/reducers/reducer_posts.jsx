import { FETCH_POSTS, CREATE_POST } from '../actions'

const INITIAL_STATE = { all: [], post: null }

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_POSTS:
      return { ...state, all: action.payload.data }

    case CREATE_POST:
      return { ...state, all: [state.all, action.payload.data] }

    default:
      return state;
  }
}
