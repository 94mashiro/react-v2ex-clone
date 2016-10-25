import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Home from '../Components/Home'
import Topic from '../Containers/Topic'

import App from '../App';

const RouteConfig = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="?tab=:name" component={Home} />
      <Route path="t/:id" component={Topic} />
    </Route>
  </Router>
);

export default RouteConfig;
