import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions'
import {bindActionCreators} from 'redux';
import PostList from '../components/PostList';
import Pagination from '../components/componentParts/Pagination'

class SingleTag extends Component{
  constructor(props){
    super(props);
    const {fetchPostsForTag} = props.action
    const {params} = props.match
    fetchPostsForTag(props.match.params.tag, params.page)
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.page !== nextProps.match.params.page){
      const {fetchPostsForTag} = nextProps.action
      const {params} = nextProps.match
      fetchPostsForTag(nextProps.match.params.tag, params.page)
    }
  }
  render(){
    const {receivePostsForTag} = this.props
    const {url} = this.props.match
    const {posts, isLoading, currentPage, noOfPages} = receivePostsForTag
    return(
      <div>
        {isLoading ? <h1>Fetching Posts</h1>: <PostList posts ={posts}/> }
        {isLoading ? null : <Pagination currentPage={currentPage} noOfPages={noOfPages} url={url}/>}

      </div>
    );
  }
}

function mapStateToProps(state){
  const {receivePostsForTag} = state
  return{
    receivePostsForTag
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
)(SingleTag);
