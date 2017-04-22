import React, {Component} from 'react';

class User extends Component{

  render(){
      const{name, avatar_urls} = this.props.user
    return(
      <div>
        <h3>{name}</h3>
        <img src={avatar_urls['96']}/>
      </div>
    );
  }
}

module.exports = User;
