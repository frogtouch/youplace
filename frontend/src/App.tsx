import React from 'react';
import { Provider } from 'react-redux';

import Board from './components/Board';

import store from './store';

const App = () => <Provider store={store}><Board /></Provider>;

export default App;