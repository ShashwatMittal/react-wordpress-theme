import React from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions';
import Header from '../components/Header';
import Pagination from '../components/componentParts/Pagination';
class Archive extends React.Component{
	constructor(props){
		super(props)
		console.log(props);
		this.state = {
			page: props.match.params.page
		}
		const {params} = props.match
		const {fetchPosts} = props.actions
		fetchPosts(params.page)
	}
	componentWillReceiveProps(nextProps){
		const {fetchPosts} = nextProps.actions
		const { page } = nextProps.match.params
		if(this.props.match.params.page !== nextProps.match.params.page){
			fetchPosts(page)
		}
	}

	render(){
		const {receivePosts} = this.props;
		const { currentPage, noOfPages, isLoading} = receivePosts;
		const {fetchPost} = this.props.actions;
		return(
			<div>
				<Header />
				<h1>Archive Page Heading</h1>
				{isLoading ? <h2>Fetching...</h2> : <Posts {...receivePosts}/> }
				<Pagination currentPage={currentPage} noOfPages={noOfPages} action={fetchPost}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	const {receivePosts} = state;
	return {
		receivePosts
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
)(Archive);
