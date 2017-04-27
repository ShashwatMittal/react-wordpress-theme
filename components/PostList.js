import React,{Component} from 'react';
import renderHTML from 'react-render-html';
import {Link} from 'react-router-dom';
class PostList extends Component {

  render () {
    const {posts} = this.props
    console.log(posts);
    return (
      <div>{posts.map((post) =>
        <article key={post.id} id={'post-'+post.id} className='post'>
          <header className='entry-header'>
          <div className='entry-meta'>
            <span className='screen-reader-text'>Posted on</span>
            <time className='entry-date' dateTime={post.date}>{post.date.split("T", 1)}</time>
          </div>
            <h2 className='entry-title'>
              <Link to={'/archive/'+post.id}>
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
module.exports = PostList;
