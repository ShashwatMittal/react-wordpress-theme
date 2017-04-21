import React, {Component} from 'react';
import renderHTML from 'react-render-html';
import {Link} from 'react-router-dom';

class PageList extends Component{
  render(){
    const {pages} = this.props
    return(
      <div>
        {pages.map((page)=>
            <article key={page.id}>
            <header>
              <Link to={'/wpReactTheme/pages/'+page.id}>{page.title.rendered}</Link>
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
