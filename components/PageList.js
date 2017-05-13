import React, {Component} from 'react';
import renderHTML from 'react-render-html';
import {Link} from 'react-router-dom';

class PageList extends Component{
  render(){
    const {pages} = this.props

    // Lists all the pages from WordPress.
    return(
      <div>
        {pages.map((page)=>
            <article key={page.id} id={'page-'+page.id} className='page'>
            <header className='entry-header'>
              <h2 className='entry-title'>
                <Link to={'/'+page.id}>{page.title.rendered}</Link>
              </h2>
            </header>
            <div className='entry-content'>
              {renderHTML(page.excerpt.rendered ? page.excerpt.rendered : "<p>No content Found</p>")}
            </div>
          </article>
        )}
      </div>
    );
  }
}

module.exports = PageList;
