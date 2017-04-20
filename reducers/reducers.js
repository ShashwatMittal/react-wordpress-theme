import { combineReducers } from 'redux';
import {
  RECEIVE_POSTS, RECEIVE_POST, REQUEST_POST,REQUEST_POSTS,
  GET_TAGS, GET_CATEGORIES, SET_VISIBILITY_FILTER, RECEIVE_MENU, TOTAL_PAGES_FOR_POSTS
} from '../constants/constants';

function receivePosts(state = {posts:[], isLoading: true, currentPage: 0, noOfPages: 0}, action){
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
                posts : action.posts,
                isLoading: false
            });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
                currentPage : action.currentPage,
                isLoading: action.loading
            });
    case TOTAL_PAGES_FOR_POSTS:
      return Object.assign({}, state, {
                noOfPages: action.noOfPages
      })
      default:
      return state;
  }
}

function receivePost(state = {post:[], isLoading: true ,postID: 0}, action){
  switch (action.type) {
    case RECEIVE_POST:
    return Object.assign({}, state, {
              post : action.post,
              isLoading: false
          });
    case REQUEST_POST:
    return Object.assign({}, state, {
              postID : action.id,
              isLoading: action.loading
          });
    default:
    return state;
  }
}

function receiveMenu(state = {menu: [], menuLocation: 'None'}, action){
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
