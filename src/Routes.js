import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/login/Login';
import Feed from './components/home/feed';
import FormEmail from './components/cadastro/FormEmail';
import FormDados from './components/cadastro/FormDados';
import { FormCadastro } from './components/cadastro/FormCadastro';

export default props => (
    <Router>
        <Scene key='root' >
           <Scene key='login' component={Login} title="Login" initial hideNavBar={true}/> 
           <Scene key='home' component={Feed}  title='Home' hideNavBar={true} />  
           <Scene key='formEmail' component={FormEmail}  title='Email' hideNavBar={true} />
           <Scene key='formDados' component={FormDados}  title='dados' hideNavBar={true} />
           <Scene key='formCadastro' component={FormCadastro}  title='cadastro' hideNavBar={true} />
        </Scene>        
    </Router>
);
