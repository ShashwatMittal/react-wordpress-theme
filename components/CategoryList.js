import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class CategoryList extends Component{

  render(){
    return(
      <ul>
      {this.props.categories.map((category) =>
        <li key={category.id} id={'cat-item-'+category.id}>
          <Link to={'/category/'+category.slug}>{category.name}</Link>
        </li>)}
      </ul>
    );
  }
}

module.exports = CategoryList;
