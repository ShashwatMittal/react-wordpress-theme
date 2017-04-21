import {combineReducers} from 'redux';
import {
  RECEIVE_POSTS, RECEIVE_POST, REQUEST_POST, REQUEST_POSTS, REQUEST_PAGES, RECEIVE_PAGES,RECEIVE_PAGE,REQUEST_PAGE,
  GET_TAGS, GET_CATEGORIES, SET_VISIBILITY_FILTER, RECEIVE_MENU, TOTAL_PAGES_FOR_POSTS, TOTAL_PAGES_FOR_PAGES
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

function receivePages(state = {pages: [], isLoading: true, currentPage: 0, noOfPages: 0}, action){
  switch (action.type) {
    case RECEIVE_PAGES:
    return Object.assign({}, state, {
              pages: action.pages,
              isLoading: false
          });
    case REQUEST_PAGES:
    return Object.assign({}, state, {
              currentPage: action.currentPage,
              isLoading: action.loading
          });
    case TOTAL_PAGES_FOR_PAGES:
    return Object.assign({}, state, {
              noOfPages: action.noOfPages
    })
    default:
    return state;

  }
}

function receivePage(state = {page:[], isLoading: true ,pageID: 0}, action){
  switch (action.type) {
    case RECEIVE_PAGE:
    return Object.assign({}, state, {
              page : action.page,
              isLoading: false
          });
    case REQUEST_PAGE:
    return Object.assign({}, state, {
              pageID : action.id,
              isLoading: action.loading
          });
    default:
    return state;
  }
}

const reducer = combineReducers({
  receivePosts,
  receivePost,
  receivePages,
  receivePage,
  receiveMenu
});

export default reducer;
