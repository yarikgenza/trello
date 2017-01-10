import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

// components for routes
import AuthPage from './components/auth/index.js';
import Dashboard from './components/dashboard/index.js';

// less
require('./less/main.less');

class NoMatch extends Component {
  render() {
    return (
      <div>Not found (404)</div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AuthPage} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>
 ),document.getElementById('root')
)
