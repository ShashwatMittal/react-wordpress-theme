import React, {Component} from 'react';
import {BrowserRouter as Router, Route ,browserHistory, Link, Switch} from 'react-router-dom';
import Archive from './Archive';
import NotFound from './NotFound';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
class Home extends Component{
	render() {
		if(phpData.constants.FRONT_PAGE !== '0'){
		}
		else{
		}
	    return(
				<div>
						<Header/>
						<Sidebar/>
						<Footer/>
				</div>
			);
	}
}

module.exports = Home;
