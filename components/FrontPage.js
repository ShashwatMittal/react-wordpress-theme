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
      {isFrontPage ? <PostList {...receivePosts}/> : isLoading ? <h1>Fetching Page...</h1> : <Page {...page}/>}
      {isFrontPage ? <Pagination currentPage={currentPage} noOfPages={noOfPages} url='/archive/page/1'/> : null}
      </div>
    );
  }
}

function mapStateToProps(state){
	const {receivePosts, receivePage} = state;
	return {
		receivePosts,
    page: receivePage
	}
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(Actions, dispatch)
	}
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
