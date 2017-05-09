import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render() {
	    return(
  	    <footer id='colophon' className='site-footer text-center' role='contentinfo'>
          <div className='site-map'>
          <Link to='/' className='footer-link'>Home</Link><span> | </span>
          <Link to='/archive/page/1' className='footer-link'>Archives</Link><span> | </span>
          <Link to='/pages/page/1' className='footer-link'>Pages</Link><span> | </span>
          <Link to='/tag/page/1' className='footer-link'>Tags</Link><span> | </span>
          <Link to='/category/page/1' className='footer-link'>Categories</Link>
          </div>
  		    <div className='site-info'>
  		    <a href='https://wordpress.org/'>Proudly powered by WordPress</a>
  		    <span className='sep'> | </span>
  		    Theme: Black Hawk by <a href='https://www.shashwatmittal.com' rel='designer'> Shashwat Mittal </a>
  		    </div>
  	    </footer>
      );
    }
}

module.exports = Footer;
