import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions'
import {bindActionCreators} from 'redux';
import PostList from '../components/PostList';
import Pagination from '../components/componentParts/Pagination'

class SingleCategory extends Component{
  constructor(props){
    super(props);
    const {fetchPostsForCategory} = props.action
    const {params} = props.match
    fetchPostsForCategory(props.match.params.id, params.page)
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.page !== nextProps.match.params.page){
      const {fetchPostsForCategory} = nextProps.action
      const {params} = nextProps.match
      fetchPostsForCategory(nextProps.match.params.id, params.page)
    }
  }
  render(){
    const {receivePostsForCategory} = this.props
    const {url} = this.props.match
    const {posts, isLoading, currentPage, noOfPages} = receivePostsForCategory
    return(
      <div>
        {isLoading ? <h1>Fetching Posts</h1>: <PostList posts ={posts}/> }
        {isLoading ? null : <Pagination currentPage={currentPage} noOfPages={noOfPages} url={url}/>}

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
