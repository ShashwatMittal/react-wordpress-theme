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
  TOTAL_PAGES_FOR_POSTS
} from '../constants/constants';
import fetch from 'isomorphic-fetch';

function requestPost(id, loading){
  return{
    type: REQUEST_POST,
    id: id,
    loading: loading
  }
}

function receivePost(id, json){
  return{
    type: RECEIVE_POST,
    post: json
  }
}

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

function receiveMenu (menuLocation, json){
  return {
    type: RECEIVE_MENU,
    menuLocation,
    menu: json
  }
}

function receivePages(pages, json){
  return{
    type:RECEIVE_PAGES,
    pages: json,
  }
}

function requestPage(id, loading){
  return{
    type:REQUEST_PAGE,
    pageID: id,
    loading: loading
  }
}

function receivePage(id, json){
  return{
    type:RECEIVE_PAGE,
    page: json,
    pageID: id
  }
}

function noOfPagesforPosts(number){
  return{
    type: TOTAL_PAGES_FOR_POSTS,
    noOfPages: number
  }
}

export function fetchPost(id){
  return dispatch => {
    dispatch(requestPost(id, true));
    return fetch('http://abc.shashwatmittal.com/wp-json/wp/v2/posts/'+id)
      .then(response => response.json())
      .then(json => dispatch(receivePost(id, json)));
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

export function fetchPages(){
  return dispatch => {
    dispatch(requestPages(true))
  }
}

export function fetchPage(){

}

export function fetchMenu(menuLocation){
  return dispatch => {
    return fetch('http://abc.shashwatmittal.com/wp-json/wp-api-menus/v2/menu-locations/'+menuLocation)
    .then(response => response.json())
    .then(json => dispatch(receiveMenu(menuLocation, json)));
  }
}
