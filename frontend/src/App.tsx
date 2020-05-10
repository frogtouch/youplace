import React from 'react';
import { Provider } from 'react-redux';

import Home from './screens/Home';

import store from './store';

import GlobalStyles from './styles/global';

const App = () => (
    <Provider store={store}>
      <Home />
      <GlobalStyles />
    </Provider>
  );

export default App;