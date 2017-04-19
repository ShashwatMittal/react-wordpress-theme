import React, {Component} from 'react';
import {BrowserRouter as Router, Route ,browserHistory, Link, Switch} from 'react-router-dom';
import Archive from './Archive';
import About from './About';
import NotFound from './NotFound';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Home extends Component{
	render() {
	    return(
					<div>
						<Header/>
						<h1>This is the Home Page of the App.</h1>
						<Footer/>
					</div>
			);
	}
}

module.exports = Home;
