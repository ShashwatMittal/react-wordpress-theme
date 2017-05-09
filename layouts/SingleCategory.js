import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions'
import {bindActionCreators} from 'redux';
import PostList from '../components/PostList';
import Pagination from '../components/componentParts/Pagination'

class SingleCategory extends Component{

  componentWillMount(){
    const {fetchPostsForCategory} = this.props.action
    const {params} = this.props.match
    fetchPostsForCategory(this.props.match.params.id, params.page)
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
    const {posts, isLoading, currentPage, noOfPages, category} = receivePostsForCategory
    return(
      <div>
        <h2>{'Category: '+category}</h2>
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
