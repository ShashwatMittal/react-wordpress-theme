import React, { Component } from 'react';
import Page from '../components/page';
class Pages extends Component {
  render(){
    return(
      <div>
        <h1>Pages</h1>
        <p>This is the content on the Page.</p>
        <Page/>
      </div>
    );
  }
}

module.exports = Pages;
