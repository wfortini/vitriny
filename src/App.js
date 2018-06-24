import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Login from './components/login/Login';
import reducers from './reducers';
import Routes from './Routes'

export default props => (
    <Provider store={createStore(reducers)}>
        <Routes />
    </Provider>
);
