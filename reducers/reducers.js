import { combineReducers } from 'redux';
import {
  RECEIVE_POSTS, RECEIVE_POST, REQUEST_POST,REQUEST_POSTS,
  GET_TAGS, GET_CATEGORIES, SET_VISIBILITY_FILTER, RECEIVE_MENU
} from '../constants/constants';

const initialState = {
}
function receivePosts(state = initialState, action){
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
                posts : action.posts
            });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
                page : action.page
            });
      default:
      return state;
  }
}

function receivePost(state = initialState, action){
  switch (action.type) {
    case RECEIVE_POST:
    return Object.assign({}, state, {
              post : action.post
          });
    case REQUEST_POST:
    return Object.assign({}, state, {
              postID : action.id
          });
    default:
    return state;
  }
}

function receiveMenu(state = initialState, action){
  switch (action.type) {
    case RECEIVE_MENU:
    return Object.assign({}, state, {
              menu : action.menu,
              menuLocation : action.menuLocation
          });
    default:
    return state;
  }
}


const reducer = combineReducers({
  receivePosts,
  receivePost,
  receiveMenu
});

export default reducer;
