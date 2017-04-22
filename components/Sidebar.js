import React from 'react';
import * as Actions from '../actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import renderHTML from 'react-render-html'

class Sidebar extends React.Component{
	constructor(props){
		super(props);
		const {fetchSidebar} = this.props.actions
		fetchSidebar('sidebar-1');
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps);
	}
	render() {
		const{sidebar, isLoading} = this.props.sidebar
		return(
		<aside>
		{isLoading ? <h1>Fetching Sidebar...</h1> : renderHTML(sidebar.rendered) }
		</aside>
		);
	}
}

function mapStateToProps(state){
	const{receiveSidebar} = state
	return{
		sidebar: receiveSidebar
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
)(Sidebar);
