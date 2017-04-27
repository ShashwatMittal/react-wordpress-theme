import React, {Component} from 'react';
import renderHTML from 'react-render-html';
import User from './User';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/actions';

class Post extends Component{

componentWillMount(){
  const {fetchUser} = this.props.actions
  const {author} = this.props.post
  fetchUser(author)
}

  render() {
    const {title, content, date, id} = this.props.post
    let publish = date.split("T", 2);
    return(
      <article id={'post-'+id} className={'post post-type post-'+id}>
        <header className='entry-header'>
          <div className='entry-meta'>
            <span className='posted-on'>
              <span className='screen-reader-text'>Posted on</span>
              <time className='entry-date' dateTime={date}>{publish['0']}</time>
            </span>
            <span className='byline'>
            {this.props.user.isLoading ? <h2>Fetching Author...</h2> : <User {...this.props.user}/> }
            </span>
          </div>
          <h1 className='entry-title'>{title.rendered}</h1>
          {renderHTML(content.rendered)}
        </header>
      </article>
    );
  }
}

function mapStateToProps(state){
  const{receiveUser} = state;
  return{
    user: receiveUser
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(Actions, dispatch)
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
