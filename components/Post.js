import React,{ Component } from 'react';
import renderHTML from 'react-render-html';
class Post extends Component {

  render () {
    let Article;
    if(this.props.posts.posts !== undefined){
      Article =
      <div>{this.props.posts.posts.map((post) =>
        <article key={post.id}>
          <header>
            <h2>
              <a href='#'>
                {post.title.rendered}
              </a>
            </h2>
          </header>
          <div className='entry-content'>
          {renderHTML(post.excerpt.rendered ? post.excerpt.rendered : 'No excerpt found.')}
          </div>
        </article>)}
      </div>;
    }
    return (
      <div>
        <h1>All Posts</h1>
        {Article}
      </div>
    );
  }
}
module.exports = Post;
