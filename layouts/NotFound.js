import React from 'react';
import SearchForm from '../components/SearchForm';

export default class Error extends React.Component {
    render() {
    return(
	     <section className = "error-404 not-found">
	      <header className = "page-header">
	       <h1 className="page-title" >{this.props.data.errorPage.title}</h1>
	      </header>
	      <div className = "page-content" >
	      <p>{this.props.data.errorPage.content}</p>
        </div>
        <SearchForm data = {this.props.data.searchForm}/>
	     </section>
	  );
  }
}
