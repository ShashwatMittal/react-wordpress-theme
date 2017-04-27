import React from 'react';
import {Link} from 'react-router-dom';

export default class Error extends React.Component {
    render() {
    return(
	     <section className = "error-404 not-found">
	      <header className = "page-header">
	       <h1 className="page-title" >Thats Embarassing</h1>
	      </header>
	      <div className = "page-content" >
	      <p>Looks like there does not exist anything at this URL.</p>
        </div>
        <Link to='/'>Go to Home</Link>
	     </section>
	  );
  }
}
