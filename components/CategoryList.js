import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class CategoryList extends Component{

  render(){
    return(
      <ul>
      {/*Displays the list of Categories passed to it through Props.*/}
      {this.props.categories.map((category) =>
        <li key={category.id} id={'cat-item-'+category.id}>
          <Link to={'/category/'+category.slug+'/page/1'}>{category.name}</Link>
        </li>)}
      </ul>
    );
  }
}

module.exports = CategoryList;
