import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {BrowserRouter as Router, Route ,browserHistory, Link, Switch, Redirect} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FrontPage from './components/FrontPage'
import Archive from './layouts/Archive'
import Pages from './layouts/Pages';
import SinglePost from './layouts/SinglePost';
import SinglePage from './layouts/SinglePage';
import NotFound from './layouts/NotFound';
import Categories from './layouts/Categories';
import SingleCategory from './layouts/SingleCategory';
import Tags from './layouts/Tags';
import SingleTag from './layouts/SingleTag';
import reducer from './reducers/reducers'

const app = document.getElementById('page');
const logger = createLogger()

const initialState = {
}
let store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
      	<a className="skip-link screen-reader-text" href="#content">Skip to content</a>
        <Header/>
        <div className='site-content-contain'>
          <div id='content' className='site-content'>
            <div className='row'>
              <div id='primary' className='content-area col-xs-12 col-sm-12 col-md-8 col-lg-9'>
                <Switch>
                  <Route exact path='/' component={FrontPage}/>
                  <Route path='/archive/page/:page' component={Archive}/>
                  <Route exact path='/archive/:id' component={SinglePost}/>
                  <Redirect from='/archive' to='page/1'/>
                  <Route path='/pages/page/:page' component={Pages}/>
                  <Route exact path='/:id' component={SinglePage}/>
                  <Route exact path='/category/page/:page' component={Categories}/>
                  <Route path='/category/:id/page/:page' component={SingleCategory}/>
                  <Redirect from='/category/:category' to='page/1'/>
                  <Route exact path='/tag/page/:page' component={Tags}/>
                  <Route path='/tag/:tag/page/:page' component={SingleTag}/>
                  <Redirect from='/tag/:tag' to='page/1'/>
                  <Route path='*' component={NotFound}/>
                </Switch>
              </div>
              <Sidebar/>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Router>
  </Provider>
    ,app);
