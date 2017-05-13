import React, {Component} from 'react';
import PageList from '../components/PageList';
import * as Actions from '../actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Pagination from '../components/componentParts/Pagination';

class Pages extends Component {

  // Initializes component data.
  constructor(props){
		super(props)
		const {params} = props.match
		const {fetchPages} = props.actions
		fetchPages(params.page)
	}
  // Checks for changes in props and dispatches actions f
	componentWillReceiveProps(nextProps){
		const {fetchPages} = nextProps.actions
		const {page} = nextProps.match.params
		if(this.props.match.params.page !== nextProps.match.params.page){
			fetchPages(page)
		}
	}
  render(){
    const {pages} = this.props;
		const {url} = this.props.match;
		const {currentPage, noOfPages, isLoading} = pages;
		return(
			<div>
				{isLoading ? <h2>Fetching...</h2> : <PageList {...pages}/> }
				<Pagination currentPage={currentPage} noOfPages={noOfPages} url={url}/>
			</div>
		);
  }
}
function mapStateToProps(state){
  const {receivePages} = state
  return{
    pages: receivePages
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
)(Pages);
