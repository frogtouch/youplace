import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Error from '../pages/Error';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/" component={Error} />
    </Switch>
  )
}

export default Routes;