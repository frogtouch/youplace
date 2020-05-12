import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/" component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  )
}

export default Routes;