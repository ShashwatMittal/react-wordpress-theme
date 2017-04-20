import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {BrowserRouter as Router, Route ,browserHistory, Link, Switch} from 'react-router-dom';
import Home from './layouts/Home'
import Archive from './layouts/Archive'
import Pages from './layouts/Pages';
import Single from './components/Single';
import reducer from './reducers/reducers'
import {fetchPosts, fetchPost, fetchMenu} from './actions/actions'
// Displaying Components for Testing Purposes.

const app = document.getElementById('main');
const logger = createLogger()

const initialState = {
}
let store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Link to='/wpReactTheme/'>Home</Link>
        <Link to='/wpReactTheme/archive/p/1'>Archive</Link>
        <Link to='/wpReactTheme/pages'>Pages</Link>
        <hr />

        <Switch>
          <Route exact path='/wpReactTheme/' component={Home}/>
          <Route path='/wpReactTheme/archive/p/:page' component={Archive}/>
          <Route path='/wpReactTheme/pages' component={Pages}/>
          <Route exact path='/wpReactTheme/archive/:id' component={Single}/>
        </Switch>
      </div>
    </Router>
  </Provider>
    ,app);
