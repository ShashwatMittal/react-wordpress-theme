import React, { Component } from 'react';
import renderHTML from 'react-render-html';
class Post extends Component{
  render() {
    const {title, content} = this.props.post
    return(
      <div>
        <h1>{title.rendered}</h1>
        {renderHTML(content.rendered)}
      </div>
    );
  }
}


module.exports = Post;
