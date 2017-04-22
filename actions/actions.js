/*phpData Global Variable providing WordPress data.*/
import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REQUEST_POSTS,
  REQUEST_POST,
  RECEIVE_PAGES,
  RECEIVE_PAGE,
  REQUEST_PAGES,
  REQUEST_PAGE,
  POSTS_PER_PAGE,
  GET_TAGS,
  GET_CATEGORIES,
  GET_SETTINGS,
  RECEIVE_MENU,
  REQUEST_MENU,
  REQUEST_USER,
  RECEIVE_USER,
  TOTAL_PAGES_FOR_POSTS,
  TOTAL_PAGES_FOR_PAGES
} from '../constants/constants';
import fetch from 'isomorphic-fetch';

// Actions for retrieving a Single Post.
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
    return fetch('http://abc.shashwatmittal.com/wp-json/wp/v2/posts/'+id)
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
    return fetch('http://abc.shashwatmittal.com/wp-json/wp/v2/posts?per_page='+POSTS_PER_PAGE+'&page='+currentPage)
      .then(function(response){
        dispatch(noOfPagesforPosts(response.headers.get('X-WP-TotalPages')));
        return response.json();
      })
      .then(json => dispatch(receivePosts(currentPage, json)));
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
    return fetch('http://abc.shashwatmittal.com/wp-json/wp/v2/pages?per_page='+POSTS_PER_PAGE+'&page='+currentPage)
    .then(function(response){
      dispatch(noOfPagesforPages(response.headers.get('X-WP-TotalPages')));
      return response.json();
    })
    .then(json => dispatch(receivePages(currentPage, json)));
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
    return fetch('http://abc.shashwatmittal.com/wp-json/wp/v2/pages/'+id)
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
    return fetch('http://abc.shashwatmittal.com/wp-json/wp-api-menus/v2/menu-locations/'+menuLocation)
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
    return fetch('http://abc.shashwatmittal.com/wp-json/wp/v2/users/'+userID)
    .then(response => response.json())
    .then(json => dispatch(receiveUser(json)));
  }
}
