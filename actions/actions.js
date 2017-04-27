/*phpData Global Variable providing WordPress data.*/
import {
  RECEIVE_POSTS, RECEIVE_POST, REQUEST_POSTS, REQUEST_POST,
  RECEIVE_PAGES, RECEIVE_PAGE, REQUEST_PAGES, REQUEST_PAGE,
  REQUEST_USER, RECEIVE_USER, REQUEST_SIDEBAR, RECEIVE_SIDEBAR,
  REQUEST_CATEGORIES, RECEIVE_CATEGORIES, RECEIVE_MENU, REQUEST_MENU,
  POSTS_PER_PAGE, TOTAL_PAGES_FOR_POSTS, TOTAL_PAGES_FOR_PAGES,
  REQUEST_API, WP_SITE_URL, WP_API, CUSTOM_MENU_API, TOTAL_PAGES_FOR_CATEGORIES,
  REQUEST_POST_FOR_CATEGORY, RECEIVE_POSTS_FOR_CATEGORY, TOTAL_PAGES_FOR_POSTS_FOR_CATEGORY
} from '../constants/constants';
import fetch from 'isomorphic-fetch';

// Actions for retrieving a Single Post.
function requestAPI(loading){
  return{
    type: REQUEST_API,
    loading: loading
  }
}

function requestPost(id, loading){
  return{
    type: REQUEST_POST,
    id: id,
    loading: loading
  }
}

function receivePost(json){
  return{
    type: RECEIVE_POST,
    post: json
  }
}

export function fetchPost(id){
  return dispatch => {
    dispatch(requestPost(id, true));
    if(localStorage.getItem('post-'+id)){
      dispatch(receivePost(JSON.parse(localStorage.getItem('post-'+id))));
    }
    else{
      return fetch(WP_SITE_URL+WP_API+'posts/'+id)
        .then(response => response.json())
        .then(function(json){
          dispatch(receivePost(json));
          localStorage.setItem('post-'+id, JSON.stringify(json));
          localStorage.setItem('post-'+id+'-lastModified', json.modified);
      });
    }
  }
}

// Actions for Retrieving List of Posts.
function requestPosts(currentPage, loading){
  return{
    type: REQUEST_POSTS,
    currentPage: currentPage,
    loading: loading
  }
}

function receivePosts(pageNum, json){
  return{
    type: RECEIVE_POSTS,
    posts: json,
  }
}

function noOfPagesforPosts(totalPages){
  return{
    type: TOTAL_PAGES_FOR_POSTS,
    noOfPages: totalPages
  }
}

export function fetchPosts(currentPage){
  return dispatch => {
    dispatch(requestPosts(currentPage, true));
    return fetch(WP_SITE_URL+WP_API+'posts?per_page='+POSTS_PER_PAGE+'&page='+currentPage)
    .then(function(response){
      dispatch(noOfPagesforPosts(response.headers.get('X-WP-TotalPages')));
      return response.json();
    })
    .then(json => {
      dispatch(receivePosts(currentPage, json));
      json.map((post) => {
        if(post.modified !== localStorage.getItem('post-'+post.id+'-lastModified')){
          localStorage.removeItem('post-'+post.id);
        }else{
          console.log('Some Error');
        }
      });
    });
  }
}

// Action for retrieving a list of Pages.
function requestPages(currentPage, loading){
    return{
      type: REQUEST_PAGES,
      loading: loading,
      currentPage: currentPage
    }
}

function receivePages(pages, json){
  return{
    type:RECEIVE_PAGES,
    pages: json,
  }
}

function noOfPagesforPages(totalPages){
  return{
    type: TOTAL_PAGES_FOR_PAGES,
    noOfPages: totalPages
  }
}

export function fetchPages(currentPage){
  return dispatch => {
    dispatch(requestPages(currentPage, true));
    return fetch(WP_SITE_URL+WP_API+'pages?per_page='+POSTS_PER_PAGE+'&page='+currentPage)
    .then(function(response){
      dispatch(noOfPagesforPages(response.headers.get('X-WP-TotalPages')));
      return response.json();
    })
    .then((json) => {
       dispatch(receivePages(currentPage, json));
       json.map((page) => {
         console.log(page.modified);
         console.log(localStorage.getItem('page-'+page.id+'-lastModified'));
         if(page.modified !== localStorage.getItem('page-'+page.id+'-lastModified')){
           localStorage.removeItem('page-'+page.id);
         }else{
           console.log('Some Error');
         }
       });
    });
  }
}

// Actions for retrieving a Single Page
function requestPage(id, loading){
  return{
    type:REQUEST_PAGE,
    id: id,
    loading: loading
  }
}

function receivePage(json){
  return{
    type:RECEIVE_PAGE,
    page: json,
  }
}

export function fetchPage(id){
  return dispatch => {
    dispatch(requestPage(id, true));
    if(localStorage.getItem('page-'+id)){
      dispatch(receivePage(JSON.parse(localStorage.getItem('page-'+id))));
    }
    else{
    return fetch(WP_SITE_URL+WP_API+'pages/'+id)
    .then(response => response.json())
    .then(function(json){
      dispatch(receivePage(json));
      localStorage.setItem('page-'+id, JSON.stringify(json));
      localStorage.setItem('page-'+id+'-lastModified', json.modified);
      });
    }
  }
}
// Actions for retrieving Primary Menu.
function requestMenu(loading){
  return{
    type: REQUEST_MENU,
    loading: loading
  }
}

function receiveMenu (menuLocation, json){
  return {
    type: RECEIVE_MENU,
    menuLocation,
    menu: json
  }
}

export function fetchMenu(menuLocation){
  return dispatch => {
    dispatch(requestMenu(true));
    return fetch(WP_SITE_URL+CUSTOM_MENU_API+'menu-locations/'+menuLocation)
    .then(response => response.json())
    .then(json => dispatch(receiveMenu(menuLocation, json)));
  }
}

//Actions for retrieving user/author details.
function requestUser(userID, loading){
  return{
    type: REQUEST_USER,
    userID: userID,
    loading: loading
  }
}

function receiveUser(json){
  return{
    type: RECEIVE_USER,
    user: json
  }
}

export function fetchUser(userID){
  return dispatch => {
    dispatch(requestUser(userID, true));
    return fetch(WP_SITE_URL+WP_API+'users/'+userID)
    .then(response => response.json())
    .then(json => dispatch(receiveUser(json)));
  }
}

//Actions for retrieving Sidebar widgets.
function requestSidebar(sidebarName, loading){
  return{
    type: REQUEST_SIDEBAR,
    sidebarName: sidebarName,
    loading: loading
  }
}

function receiveSidebar(json){
  return{
    type: RECEIVE_SIDEBAR,
    sidebar: json
  }
}

export function fetchSidebar(sidebarName){
  return dispatch => {
    dispatch(requestSidebar(sidebarName, true));
    return fetch(WP_SITE_URL+'/wp-json/wp-rest-api-sidebars/v1/sidebars/'+sidebarName)
    .then(response => response.json())
    .then(json => dispatch(receiveSidebar(json)));
  }
}

// Actions for Retrieving Categories.
function requestCategories(currentPage, loading){
  return{
    type: REQUEST_CATEGORIES,
    currentPage: currentPage,
    loading: loading
  }
}

function receiveCategories(json){
  return{
    type: RECEIVE_CATEGORIES,
    categories: json
  }
}

function noOfPagesforCategories(totalPages){
  return{
    type: TOTAL_PAGES_FOR_CATEGORIES,
    noOfPages: totalPages
  }
}

export function fetchCategories(currentPage){
  return dispatch => {
    dispatch(requestCategories(currentPage, true));
    return fetch(WP_SITE_URL+WP_API+'categories?page='+currentPage)
    .then(function(response){
      console.log(response);
      dispatch(noOfPagesforCategories(response.headers.get('X-WP-TotalPages')));
      return response.json();
    })
    .then(json => dispatch(receiveCategories(json)));
  }
}

// Actions to fetch Posts for a Specific Category
function requestPostsForCategory(category, currentPage, loading){
  return{
    type: REQUEST_POST_FOR_CATEGORY,
    category: category,
    loading: loading,
    currentPage: currentPage
  }
}

function noOfPagesforPostsForCategory(totalPages){
  return{
    type: TOTAL_PAGES_FOR_POSTS_FOR_CATEGORY,
    noOfPages: totalPages
  }
}

function receivePostsForCategory(json){
  return{
    type: RECEIVE_POSTS_FOR_CATEGORY,
    posts: json
  }
}

export function fetchPostsForCategory(category, currentPage){
  return dispatch => {
    dispatch(requestPostsForCategory(category, currentPage, true));
    return fetch(WP_SITE_URL+WP_API+'posts?category='+category+'&page='+currentPage+'&per_page='+POSTS_PER_PAGE)
    .then(function(response){
      dispatch(noOfPagesforPostsForCategory(response.headers.get('X-WP-TotalPages')));
      return response.json();
    })
    .then(json => dispatch(receivePostsForCategory(json)));
  }
}
