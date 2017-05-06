import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App, Dashboard} from './containers'


class AppRouter extends Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Dashboard} />            
              <Route path="dashboard" component={Dashboard} >
                  <IndexRoute component={Dashboard} />
              </Route>
            </Route>
        </Router>
    );
  }
}

export default AppRouter;