import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component{
  render(){

    let Paginate;
    const {currentPage, noOfPages} = this.props
    let next = (parseInt(currentPage)+1)
    let previous = parseInt(currentPage)-1

    if(currentPage > 1 && currentPage < noOfPages){
      Paginate =
      <p>
        <Link to={'/wpReactTheme/archive/p/'+previous}>Previous</Link> {currentPage} <Link to={'/wpReactTheme/archive/p/'+next}>Next</Link>
      </p>
    }else if(currentPage == 1 && currentPage < noOfPages){
      Paginate =
      <p>
      {currentPage} <Link to={'/wpReactTheme/archive/p/'+next}>Next</Link>
      </p>
    }else if(currentPage > 1 && currentPage == noOfPages){
      Paginate =
      <p>
      <Link to={'/wpReactTheme/archive/p/'+previous}>Previous</Link> {currentPage}
      </p>
    }

    return(
      <div>
      {Paginate}
      </div>
    );
  }
}

module.exports = Pagination;
