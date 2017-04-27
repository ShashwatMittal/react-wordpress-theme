import React, {Component} from 'react';
import * as Actions from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Page from '../components/Page';

class SinglePage extends Component{
  constructor(props){
    super(props);
    const {fetchPage} = props.actions
    const {params} = props.match
    console.log(props);
    fetchPage(params.id)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      const {fetchPage} = nextProps.actions
      fetchPage(nextProps.match.params.id)
    }
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
