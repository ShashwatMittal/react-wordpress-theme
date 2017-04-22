import React from 'react';
import fetch from 'isomorphic-fetch';
import * as Actions from '../actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    props.actions.fetchMenu('primary');
  }

  render() {
    let PrimaryMenu;
    const {menu} = this.props.receiveMenu
    const{isLoading} = menu
    return (
      <div>
        {isLoading ? <h3>Fetching Menu...</h3> : <ul>
          {menu.map(function(menuItem){
            if(menuItem.object == 'post'){
              return <li key={menuItem.object_id}><Link to={'/wpReactTheme/archive/'+menuItem.object_id}>{menuItem.title}</Link></li>
            }
            if(menuItem.object == 'page'){
              return <li key={menuItem.object_id}><Link to={'/wpReactTheme/pages/'+menuItem.object_id}>{menuItem.title}</Link></li>
            }
            if(menuItem.object == 'custom'){
              return <li key={menuItem.object_id}><a href={menuItem.url}>{menuItem.title}</a></li>
            }
            if(menuItem.object == 'category'){
              return <li key={menuItem.object_id}><Link to={'wpReactTheme/category/'+menuItem.object_id}>{menuItem.title}</Link></li>
            }
        })}
        </ul>}
      </div>
    );
  }
}

function mapStateToProps(state){
  const { receiveMenu } = state;
  return{
    receiveMenu
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
)(Header);
