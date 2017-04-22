import React, {Component} from 'react';
import {BrowserRouter as Router, Route ,browserHistory, Link, Switch} from 'react-router-dom';
import Archive from './Archive';
import About from './About';
import NotFound from './NotFound';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Home extends Component{
	render() {
		console.log(phpData.constants);
	    return(
						<Header/>
			);
	}
}

module.exports = Home;
