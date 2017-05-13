import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as Actions from '../actions/actions';
import TagList from '../components/TagList';
import Pagination from '../components/componentParts/Pagination';

class Tags extends Component{
  // Initializes component data.
  constructor(props){
    super(props);
    const {fetchTags} = props.actions
    const {page} = props.match.params
    fetchTags(page);
  }
  // Listens for changes in props and fetch required data.
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.page !== nextProps.match.params.page){
      const {fetchTags} = nextProps.actions
      const {page} = nextProps.match.params
      fetchTags(page);
    }
  }

  render(){
    const {receiveTags} = this.props
    const {isLoading} = this.props
    const {currentPage, noOfPages} = receiveTags
    const {url} = this.props.match
    return(
      <div className='tags'>
        <h1 className='entry-tile'>All Tags</h1>
        {isLoading ? <h2>Fetching Tags</h2> : <TagList {...receiveTags}/>}
        {isLoading ? null : <Pagination currentPage={currentPage} noOfPages={noOfPages} url={url}/>}
      </div>
    );
  }
}

function mapStateToProps(state){
  const {receiveTags} = state
  const {tags, isLoading} = receiveTags
  return{
    isLoading,
    receiveTags
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
)(Tags);
