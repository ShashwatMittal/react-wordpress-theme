import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions'
import {bindActionCreators} from 'redux';

class SingleCategory extends Component{
  render(){
    console.log(this.props);
    return(
      <h1>Category: {this.props.match.params.slug}</h1>
    );
  }
}

function mapStateToProps(state){
  return{
    state
  }
}

function mapDispatchToProps(dispatch){
  return{
    action: bindActionCreators(Actions, dispatch)
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCategory);
