import {combineReducers} from 'redux';
import {
  RECEIVE_POSTS, RECEIVE_POST, REQUEST_POST, REQUEST_POSTS, REQUEST_PAGES, RECEIVE_PAGES,
  RECEIVE_PAGE, REQUEST_PAGE, REQUEST_USER, RECEIVE_USER, RECEIVE_SIDEBAR, REQUEST_SIDEBAR,
  REQUEST_MENU, RECEIVE_MENU, TOTAL_PAGES_FOR_POSTS, TOTAL_PAGES_FOR_PAGES, REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES, TOTAL_PAGES_FOR_CATEGORIES, REQUEST_POST_FOR_CATEGORY, RECEIVE_POSTS_FOR_CATEGORY, TOTAL_PAGES_FOR_POSTS_FOR_CATEGORY
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

function receiveMenu(state = {menu: [], menuLocation: 'None', isLoading: true}, action){
  switch (action.type) {
    case RECEIVE_MENU:
    return Object.assign({}, state, {
              menu : action.menu,
              menuLocation : action.menuLocation,
              isLoading: false
          });
    case REQUEST_MENU:
    return Object.assign({}, state, {
              isLoading: action.loading
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

function receiveUser(state = {user:[], isLoading: true, userID: 0}, action){
  switch (action.type) {
      case RECEIVE_USER:
      return Object.assign({}, state, {
              user: action.user,
              isLoading: false
      });
      case REQUEST_USER:
      return Object.assign({}, state, {
              isLoading: action.loading,
              userID: action.userID
      })
    default:
    return state;
  }
}

function receiveSidebar(state = {sidebar:[], isLoading:true}, action){
  switch (action.type) {
    case REQUEST_SIDEBAR:
    return Object.assign({}, state, {
              isLoading: action.loading,
              sidebarName: action.sidebarName
    });
    case RECEIVE_SIDEBAR:
    return Object.assign({}, state, {
              sidebar: action.sidebar,
              isLoading: false
    });
    default:
    return state;
  }
}

function receiveCategories(state = {categories: [], isLoading: true}, action){
  switch (action.type) {
    case REQUEST_CATEGORIES:
    return Object.assign({}, state, {
              isLoading: action.loading,
              currentPage: action.currentPage
    });
    case RECEIVE_CATEGORIES:
    return Object.assign({}, state, {
              categories: action.categories,
              isLoading: false
    });
    case TOTAL_PAGES_FOR_CATEGORIES:
    return Object.assign({}, state, {
              noOfPages: action.noOfPages
    });
    default:
    return state;

  }
}

function receivePostsForCategory(state = {category: '', posts: [], isLoading: true, currentPage: 1}, action){
  switch (action.type) {
    case REQUEST_POST_FOR_CATEGORY:
      return Object.assign({}, state, {
        category: action.category,
        isLoading: action.loading,
        currentPage: action.currentPage
      });
    case RECEIVE_POSTS_FOR_CATEGORY:
      return Object.assign({}, state, {
        isLoading: false,
        posts: action.posts
      });
    case TOTAL_PAGES_FOR_POSTS_FOR_CATEGORY:
      return Object.assign({}, state, {
        noOfPages: action.noOfPages
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
  receiveMenu,
  receiveUser,
  receiveSidebar,
  receiveCategories,
  receivePostsForCategory
});

export default reducer;
