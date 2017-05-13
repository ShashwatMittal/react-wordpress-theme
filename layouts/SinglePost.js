import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from '../components/Post';
import * as Actions from '../actions/actions';
import {bindActionCreators} from 'redux';

class SinglePost extends Component{

  // Initializes post data.
  constructor(props){
    super(props);
    const {fetchPost} = props.actions
    const {params} = props.match
    fetchPost(params.id);
  }
  // Listens for changes in props and re-render component if required.
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      const {fetchPost} = nextProps.actions
      const {params} = nextProps.match
      fetchPost(params.id)
    }
  }

  render(){
    const { isLoading } = this.props.post
    return(
      <div>
      {isLoading ? <h2>Fetching Post...</h2> : <Post {...this.props.post}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { receivePost} = state
  return{
    post: receivePost,
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
)(SinglePost)
