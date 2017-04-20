import React,{ Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
class Posts extends Component {

  render () {
    const {posts} = this.props
    return (
      <div>{posts.map((post) =>
        <article key={post.id}>
          <header>
            <h2>
              <Link to={'/wpReactTheme/archive/'+post.id}>
                {post.title.rendered}
              </Link>
            </h2>
          </header>
          <div className='entry-content'>
          {renderHTML(post.excerpt.rendered ? post.excerpt.rendered : 'No excerpt found.')}
          </div>
        </article>)}
      </div>
    );
  }
}
module.exports = Posts;
