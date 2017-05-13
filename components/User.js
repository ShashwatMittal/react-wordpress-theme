import React, {Component} from 'react';

class User extends Component{

  render(){
    const{name, avatar_urls} = this.props.user
    return(
        <span className='authorName'>{' By: '+name+' '}<img src={avatar_urls['24']} className='img-rounded'/>
        </span>
    );
  }
}

module.exports = User;
