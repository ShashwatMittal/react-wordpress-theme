import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions'
import {bindActionCreators} from 'redux';
import PostList from '../components/PostList';

class SingleCategory extends Component{
  constructor(props){
    super(props);

    const {fetchPostsForCategory} = props.action
    const {params} = props.match
    const {currentPage, category} = props.receivePostsForCategory
    console.log(props);
    if(params.page){
      fetchPostsForCategory(props.match.params.slug, params.page)
    }
    else{
      fetchPostsForCategory(props.match.params.slug, currentPage)
    }
  }

  render(){
    const {posts, isLoading, category} = this.props.receivePostsForCategory
    return(
      <div>
      <h1>Category: {category}</h1>
      {isLoading ? <h1>Fetching Posts</h1>: <h1>Fetched Posts</h1> }
      </div>
    );
  }
}

function mapStateToProps(state){
  const {receivePostsForCategory} = state
  return{
    receivePostsForCategory
  }
}

function mapDispatchToProps(dispatch){
  return{
    action: bindActionCreators(Actions, dispatch)
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCategory);
