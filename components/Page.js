import React, {Component} from 'react';
import renderHTML from 'react-render-html';

class Page extends Component {
  render() {
    console.log(this.props);
    const{title, content} = this.props
    return(
      <div>
        <h2>{title.rendered}</h2>
        {renderHTML(content.rendered)}
      </div>
    );
  }
}

module.exports = Page;
