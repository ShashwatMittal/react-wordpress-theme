import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class TagList extends Component{

  render(){
    return(
      <ul>
      {this.props.tags.map((tag) =>
        <li key={tag.id} id={'cat-item-'+tag.id}>
          <Link to={'/tag/'+tag.slug+'/page/1'}>{tag.name}</Link>
        </li>)}
      </ul>
    );
  }
}

module.exports = TagList;
