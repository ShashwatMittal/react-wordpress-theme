import React from 'react';
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
    const {isLoading} = menu
    return (
      <header id='masthead' className='site-header'>
        <div className='custom-header jumbotron'>
          <div className='site-branding'>
            <div className='wrap'>
              <div className='site-branding-text text-center'>
                <h1 className='site-title'>
                  <Link to='/'>{phpData.constants.SITE_TITLE}</Link>
                </h1>
                <p className='site-description'>{phpData.constants.SITE_DESCRIPTION}</p>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? <h2>Fetching Menu...</h2> :
          <div className='navigation-top'>
            <div className='wrap'>
              <nav id='site-navigation' className='navbar navbar-default' aria-label='Top Menu'>
                <div className='container-fluid'>
                  <ul id='top-menu' className='nav navbar-nav'>
                    {menu.map(function(menuItem){
                        if(menuItem.object == 'post'){
                          return <li key={menuItem.object_id} id={'menu-item-'+menuItem.object_id} className='menu-item'><Link to={'/archive/'+menuItem.object_id}>{menuItem.title}</Link></li>
                        }
                        if(menuItem.object == 'page'){
                          return <li key={menuItem.object_id} id={'menu-item-'+menuItem.object_id} className='menu-item'><Link to={'/'+menuItem.object_id}>{menuItem.title}</Link></li>
                        }
                        if(menuItem.object == 'custom'){
                          return <li key={menuItem.object_id} id={'menu-item-'+menuItem.object_id} className='menu-item'><a href={menuItem.url}>{menuItem.title}</a></li>
                        }
                        if(menuItem.object == 'category'){
                          return <li key={menuItem.object_id} id={'menu-item-'+menuItem.object_id} className='menu-item'><Link to={'/category/'+menuItem.object_id}>{menuItem.title}</Link></li>
                        }
                      })
                    }
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        }
      </header>
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
