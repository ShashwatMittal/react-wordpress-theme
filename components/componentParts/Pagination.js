import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Pagination extends Component{
  render(){

    let NavLinks;
    const {path, currentPage, noOfPages} = this.props
    let next = (parseInt(currentPage)+1)
    let previous = parseInt(currentPage)-1
    let parentPath = path.split(":", 1)
    if(currentPage > 1 && currentPage < noOfPages){
      NavLinks =
      <div className='nav-links text-center'>
        <Link to={parentPath[0]+previous} className='page-numbers col-xs-4 col-sm-4 col-md-4 col-lg-4 btn btn-primary'>Previous</Link>
        <span className='page-numbers current col-xs-4 col-sm-4 col-md-4 col-lg-4'><span className='meta-nav screen-reader-text'>Page </span>{currentPage}</span>
        <Link to={parentPath[0]+next} className='page-numbers col-xs-4 col-sm-4 col-md-4 col-lg-4 btn btn-primary'>Next</Link>
      </div>
    }else if(currentPage == 1 && currentPage < noOfPages){
      NavLinks =
      <div className='nav-links text-center'>
      <span className='page-numbers col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xs-4 col-sm-4 col-md-4 col-lg-4'><span className='meta-nav screen-reader-text'>Page </span>{currentPage}</span>
      <Link to={parentPath[0]+next} className='page-numbers col-xs-4 col-sm-4 col-md-4 col-lg-4 btn btn-primary'>Next</Link>
      </div>
    }else if(currentPage > 1 && currentPage == noOfPages){
      NavLinks =
      <div className='nav-links text-center'>
      <Link to={parentPath[0]+previous} className='page-numbers col-xs-4 col-sm-4 col-md-4 col-lg-4 btn btn-primary'>Previous</Link>
      <span className='page-numbers col-xs-4 col-sm-4 col-md-4 col-lg-4'><span className='meta-nav screen-reader-text'>Page </span>{currentPage}</span>
      </div>
    }

    return(
      <nav className='navigation pagination row'>
      <h2 className='screen-reader-text'>Navigation Links</h2>
      {NavLinks}
      </nav>
    );
  }
}

module.exports = Pagination;
