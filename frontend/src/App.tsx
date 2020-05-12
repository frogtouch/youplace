import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import store from './store';
import Routes from './routes/routes';

import GlobalStyles from './styles/global';
import history from './services/history';

const App = () => (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  );

export default App;