import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeSigin from './hoc/ObieeSignin';
import data from '../db.json';
//import ObieeCrudApprole from './hoc/ObieeCrudApprole';
//import { TramRounded } from '@material-ui/icons';
import {  BrowserRouter as Router,Route,Switch as SwitchRoute} from 'react-router-dom';
//import { createBrowserHistory } from 'history';
import {UserContext} from './Context';
import App from './App';

function Comp1(){
    return (
        <div>
            Comp1 is loading
        </div>
    )
}

export default function AppRouter(){

    const context = React.useContext(UserContext);

    //const [isAuthenticate,setIsAuthenticate] = React.useState(false);
    console.log("App is rendering",context.obieeState );
    return (
        <div>
        <Router>
            <SwitchRoute>
                <Route path="/" exact>                   
                    {!context.obieeState.isAuthenticated ? <ObieeSigin /> : <App/>}                                        
                </Route> 
            </SwitchRoute>
        </Router>
        </div>
    );
}
