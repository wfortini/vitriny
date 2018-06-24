import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/login/Login';
import Feed from './components/home/feed'

export default props => (
    <Router>
        <Scene key='root' >
           <Scene key='login' component={Login} title="Login" initial hideNavBar={true}/> 
           <Scene key='home' component={Feed}  title='Home' hideNavBar={true} />  
        </Scene>        
    </Router>
);
