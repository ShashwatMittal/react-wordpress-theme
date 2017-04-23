import React, {Component} from 'react';
import Footer from './Footer';
import {connect} from 'react-redux';
import PostList from '../components/PostList';
import {bindActionCreators} from 'redux';
import Page from './Page';
import * as Actions from '../actions/actions';

class FrontPage extends Component{
  constructor(props){
    super(props);
    const {fetchPage, fetchPosts} = props.actions
    if(phpData.constants.FRONT_PAGE !== '0'){
      fetchPage(109)
    }
    else{
      fetchPosts(1);
    }
  }
  render(){
    let front;
    const {receivePosts} = this.props;
    const isFrontPage = phpData.constants.FRONT_PAGE == '0';
    const {page, isLoading} = this.props.page
    return(
      <div>
      <h1>Hello FrontPage</h1>
      {isFrontPage ? <PostList {...receivePosts}/> : isLoading ? <h1>Fetching Page...</h1> : <Page {...page}/>}
      <Footer/>
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
