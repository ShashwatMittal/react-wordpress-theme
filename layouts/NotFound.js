import React from 'react';
import {Link} from 'react-router-dom';

export default class Error extends React.Component {

    // 404 Error Page.
    render() {
    return(
	     <section className = "error-404 not-found">
	      <header className = "page-header">
	       <h1 className="page-title error-page-title" >Oops!</h1>
	      </header>
	      <div className = "page-content" >
        <h2>{'We can\'t seem to find the page you are looking for'}</h2>
        <h4>{'Error Code: 404'}</h4>
	      <p>Here are some helpful links instead:</p>

        <p><Link to='/' className='error-page-link'>Home</Link></p>
        <p><Link to='/archive/page/1' className='error-page-link'>Archives</Link></p>
        <p><Link to='/pages/page/1' className='error-page-link'>Pages</Link></p>
        <p><Link to='/category/page/1' className='error-page-link'>Categories</Link></p>
        </div>
	     </section>
	  );
  }
}
