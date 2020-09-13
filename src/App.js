import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeSigin from './hoc/ObieeSignin';
import data from '../db.json';
import UserContext from './Context';

//import ObieeMaterialTable from './widgets/ObieeMaterialTable';
//import ObieeCrudApprole from './hoc/ObieeCrudApprole';
//import { TramRounded } from '@material-ui/icons';
import {  BrowserRouter as Router,Route,Switch as SwitchRoute} from 'react-router-dom';
//import { createBrowserHistory } from 'history';

export default function App(){
    const [isAuthenticate,setIsAuthenticate] = React.useState(false);
    const {handleLogedIn} = React.useContext(UserContext);

    return (
        <div>
            {                        
                !isAuthenticate ?
                    (<ObieeSigin handleLogin={(userName,pass)=>{
                        if(userName==='admin' && pass==='admin')
                            setIsAuthenticate(true);
                        else
                            setIsAuthenticate(false);

                        handleLogedIn(isAuthenticate);
                    }}/>)
            
                    :
                    
                    (<Dashboard systemInfos={data.systemInfos}/> )
            }

            </div>
    );
}

//  <Dashboard /> 
//  <ObieeCrudApprole url={localStorage.esbip+'api/v1.0/approles'}/>
