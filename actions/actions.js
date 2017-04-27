/*phpData Global Variable providing WordPress data.*/
import {
  RECEIVE_POSTS, RECEIVE_POST, REQUEST_POSTS, REQUEST_POST,
  RECEIVE_PAGES, RECEIVE_PAGE, REQUEST_PAGES, REQUEST_PAGE,
  REQUEST_USER, RECEIVE_USER, REQUEST_SIDEBAR, RECEIVE_SIDEBAR,
  REQUEST_CATEGORIES, RECEIVE_CATEGORIES, RECEIVE_MENU, REQUEST_MENU,
  POSTS_PER_PAGE, TOTAL_PAGES_FOR_POSTS, TOTAL_PAGES_FOR_PAGES,
  REQUEST_API, WP_SITE_URL, WP_API, CUSTOM_MENU_API, TOTAL_PAGES_FOR_CATEGORIES
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
    return fetch(WP_SITE_URL+WP_API+'posts/'+id)
      .then(response => response.json())
      .then(json => dispatch(receivePost(json)));
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

function noOfPagesforPosts(number){
  return{
    type: TOTAL_PAGES_FOR_POSTS,
    noOfPages: number
  }
}

export function fetchPosts(currentPage){
  return dispatch => {
    dispatch(requestPosts(currentPage, true));
    if(localStorage.getItem('post-page-'+currentPage) !== null){
      if(localStorage.getItem('wp-post-totalpages') !== null){
        dispatch(noOfPagesforPosts(localStorage.getItem('wp-post-totalpages')));
      }
      return dispatch(receivePosts(currentPage, JSON.parse(localStorage.getItem('post-page-'+currentPage))));
    }
    return fetch(WP_SITE_URL+WP_API+'posts?per_page='+POSTS_PER_PAGE+'&page='+currentPage)
      .then(function(response){
        dispatch(noOfPagesforPosts(response.headers.get('X-WP-TotalPages')));
        localStorage.setItem('wp-post-totalpages', response.headers.get('X-WP-TotalPages'));
        return response.json();
      })
      .then(function(json){
        dispatch(receivePosts(currentPage, json));
        localStorage.setItem('post-page-'+currentPage,JSON.stringify(json));
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

function noOfPagesforPages(number){
  return{
    type: TOTAL_PAGES_FOR_PAGES,
    noOfPages: number
  }
}

export function fetchPages(currentPage){
  return dispatch => {
    dispatch(requestPages(currentPage, true));
    if(localStorage.getItem('page-page-'+currentPage) !== null){
      if(localStorage.getItem('wp-page-totalpages') !== null){
        dispatch(noOfPagesforPages(localStorage.getItem('wp-page-totalpages')));
      }
      return dispatch(receivePages(currentPage, JSON.parse(localStorage.getItem('page-page-'+currentPage))));
    }
    return fetch(WP_SITE_URL+WP_API+'pages?per_page='+POSTS_PER_PAGE+'&page='+currentPage)
    .then(function(response){
      dispatch(noOfPagesforPages(response.headers.get('X-WP-TotalPages')));
      localStorage.setItem('wp-page-totalpages', response.headers.get('X-WP-TotalPages'));
      return response.json();
    })
    .then(function(json){
      dispatch(receivePages(currentPage, json));
      localStorage.setItem('page-page-'+currentPage,JSON.stringify(json));
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
    return fetch(WP_SITE_URL+WP_API+'pages/'+id)
    .then(response => response.json())
    .then(json => dispatch(receivePage(json)));
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

function noOfPagesforCategories(number){
  return{
    type: TOTAL_PAGES_FOR_CATEGORIES,
    noOfPages: number
  }
}

export function fetchCategories(currentPage){
  return dispatch => {
    dispatch(requestCategories(currentPage, true));
    return fetch(WP_SITE_URL+WP_API+'categories?page='+currentPage)
    .then(function(response){
      dispatch(noOfPagesforCategories(response.headers.get('X-WP-TotalPages')));
      return response.json();
    })
    .then(json => dispatch(receiveCategories(json)));
  }
}
