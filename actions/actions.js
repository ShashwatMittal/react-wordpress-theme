import {
  RECEIVE_POSTS, RECEIVE_POST, RECEIVE_PAGE,REQUEST_POSTS,POSTS_PER_PAGE,
  GET_TAGS, GET_CATEGORIES, GET_SETTINGS, REQUEST_POST,RECEIVE_MENU
} from '../constants/constants';
import fetch from 'isomorphic-fetch';

function requestPost(id){
  return{
    type: REQUEST_POST,
    postID: id
  }
}

function receivePost(id, json){
  return{
    type: RECEIVE_POST,
    post: json,
    postID: id
  }
}

function requestPosts(page){
  return{
    type: REQUEST_POSTS,
    page
  }
}

function receivePosts(page, json){
  return{
    type: RECEIVE_POSTS,
    posts: json,
    page
  }
}

function receiveMenu (menuLocation, json){
  return {
    type: RECEIVE_MENU,
    menuLocation,
    menu: json
  }
}

export function fetchPost(id){
  return dispatch => {
    dispatch(requestPost(id));
    return fetch('http://abc.shashwatmittal.com/wp-json/wp/v2/posts/'+id)
      .then(response => response.json())
      .then(json => dispatch(receivePost(id, json)));
  }
}

export function fetchPosts(page){
  return dispatch => {
    dispatch(requestPosts(page));
    return fetch('http://abc.shashwatmittal.com/wp-json/wp/v2/posts?per_page='+POSTS_PER_PAGE+'&page='+page)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(page, json)));
  }
}

export function fetchMenu(menuLocation){
  return dispatch => {
    return fetch('http://abc.shashwatmittal.com/wp-json/wp-api-menus/v2/menu-locations/'+menuLocation)
    .then(response => response.json())
    .then(json => dispatch(receiveMenu(menuLocation, json)));
  }
}
