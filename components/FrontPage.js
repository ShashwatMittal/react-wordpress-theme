import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostList from '../components/PostList';
import {bindActionCreators} from 'redux';
import Page from './Page';
import * as Actions from '../actions/actions';
import Pagination from './componentParts/Pagination';

class FrontPage extends Component{
  constructor(props){
    super(props);
    const {fetchPage, fetchPosts} = props.actions
    if(phpData.constants.FRONT_PAGE !== '0'){
      fetchPage(phpData.constants.FRONT_PAGE)
    }
    else{
      fetchPosts(1);
    }
  }
  render(){
    const {receivePosts} = this.props;
    const isFrontPage = phpData.constants.FRONT_PAGE == '0';
    const {page, isLoading} = this.props.page
    const {currentPage, noOfPages} = receivePosts
    return(
      <div>
      {/*Displays the set front page or a list of latest posts in accordance to WordPress reading settings.*/}
      {isFrontPage ? <PostList {...receivePosts}/> : isLoading ? <h1>Fetching Page...</h1> : <Page {...page}/>}
      {isFrontPage ? <Pagination currentPage={currentPage} noOfPages={noOfPages} url='/archive/page/1'/> : null}
      </div>
    );
  }
}
// Mapping part of the state to the Props of the component.
function mapStateToProps(state){
	const {receivePosts, receivePage} = state;
	return {
		receivePosts,
    page: receivePage
	}
}
// Passing actions as Props of the Component.
function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(Actions, dispatch)
	}
}

// Connect binds the state and actions to the props of the component.
module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
