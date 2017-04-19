import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions';
import Header from '../components/Header';

class Archive extends React.Component{

	constructor(props){
		super(props);
		props.actions.fetchPosts(2);
	}

	render(){
		let Pagination;
		console.log(this.props);
		if(this.props.receivePosts.page !== 1){
			Pagination =
			<p><a href='#'>Previous</a> {this.props.receivePosts.page} <a href='#'>Next</a></p>
		}else{
			Pagination =
			<p>{this.props.receivePosts.page} <a href='#'>Next</a></p>
		}

		const {receivePosts} = this.props;
		return(
			<div>
				<Header />
				<h1>Archive Page Heading</h1>
				<Post posts = {receivePosts}/>
				{Pagination}
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
