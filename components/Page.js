import React, {Component} from 'react';
import renderHTML from 'react-render-html';


class Page extends Component {

  render() {
    const{title, content, id} = this.props

    // The layout for a Single Page. The data to be rendered is passed in the props.
    return(
      <article id={'post-'+id} className={'page-type-page hentry post-'+id}>
        <header className='entry-header'>
          <h1 className='entry-title'>{title.rendered}</h1>
        </header>
        <div className='entry-content'>
        {renderHTML(content.rendered)}
        </div>
      </article>
    );
  }
}


module.exports = Page;
