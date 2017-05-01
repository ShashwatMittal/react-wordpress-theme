import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as Actions from '../actions/actions';
import CategoryList from '../components/CategoryList';
import Pagination from '../components/componentParts/Pagination';

class Categories extends Component{

  constructor(props){
    super(props);
    const {fetchCategories} = props.actions
    const {page} = props.match.params
    fetchCategories(page);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.page !== nextProps.match.params.page){
      const {fetchCategories} = nextProps.actions
      const {page} = nextProps.match.params
      fetchCategories(page);
    }
  }

  render(){
    const {receiveCategories} = this.props
    const {isLoading} = this.props
    const {currentPage, noOfPages} = receiveCategories
    const {url} = this.props.match
    return(
      <div className='categories'>
        <h1 className='entry-tile'>All Categories</h1>
        {isLoading ? <h2>Fetching Categories</h2> : <CategoryList {...receiveCategories}/>}
        {isLoading ? null : <Pagination currentPage={currentPage} noOfPages={noOfPages} url={url}/>}
      </div>
    );
  }
}

function mapStateToProps(state){
  const {receiveCategories} = state
  const {categories, isLoading} = receiveCategories
  return{
    isLoading,
    receiveCategories
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
)(Categories);
