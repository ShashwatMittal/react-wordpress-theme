import React, {Component} from 'react';
import * as Actions from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Page from '../components/Page';

class SinglePage extends Component{
  componentWillMount(){
    const {fetchPage} = this.props.actions
    const {params} = this.props.match
    fetchPage(params.id)
  }
  render(){
    const{page, isLoading} = this.props.page
    return(
      isLoading ? <h2>Fetching...</h2> : <Page {...page}/>
    );
  }
}

function mapStateToProps(state){
  const {receivePage} = state
  return{
    page: receivePage
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
)(SinglePage);
