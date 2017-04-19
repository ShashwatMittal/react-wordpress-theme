import React from 'react';

class Footer extends React.Component{
    render() {
	    return(
  	    <footer id = "colophon" className = "site-footer" role = "contentinfo">
  		    <div className = "site-info">
  		    <a href = "https://wordpress.org/" >Proudly powered by WordPress</a>
  		    <span className = "sep"> | </span>
  		    Theme: Black Hawk by < a href = "https://www.shashwatmittal.com" rel = "designer" > Shashwat Mittal < /a>
  		    </div>
  	    </footer>
      );
    }
}

module.exports = Footer;
