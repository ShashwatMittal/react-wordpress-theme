import React from 'react';
import {connect} from 'react-redux';
import PostList from '../components/PostList';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/actions';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Pagination from '../components/componentParts/Pagination';
class Archive extends React.Component{
	constructor(props){
		super(props)
		const {params} = props.match
		const {fetchPosts} = props.actions
		fetchPosts(params.page)
	}
	componentWillReceiveProps(nextProps){
		if(this.props.match.params.page !== nextProps.match.params.page){
			const {fetchPosts} = nextProps.actions
			const {page} = nextProps.match.params
			fetchPosts(page)
		}
	}

	render(){
		const {receivePosts} = this.props;
		const {path} = this.props.match;
		console.log(path);
		const {currentPage, noOfPages, isLoading} = receivePosts;
		return(
			<div>
				{isLoading ? <h2>Fetching...</h2> : <PostList {...receivePosts}/> }
				{isLoading ? null : <Pagination currentPage={currentPage} noOfPages={noOfPages} path={path}/>}
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
