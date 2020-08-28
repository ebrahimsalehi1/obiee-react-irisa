import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeSigin from './hoc/ObieeSignin';
import data from '../db.json';

import ObieeCrudApprole from './hoc/ObieeCrudApprole';
import { TramRounded } from '@material-ui/icons';

export default function App(){
    const [isAuthenticate,setIsAuthenticate] = React.useState(true);
    return (
        <div>
            {
            !isAuthenticate &&
                <ObieeSigin handleLogin={(userName,pass)=>{
                    if(userName==='admin' && pass==='admin')
                        setIsAuthenticate(true);
                    else
                        setIsAuthenticate(false);
                }}/>
            }
            {
                isAuthenticate &&
                <Dashboard systemInfos={data.systemInfos}/> 
            }
        </div>
    );
}

//  <Dashboard /> 
//  <ObieeCrudApprole url={localStorage.esbip+'api/v1.0/approles'}/>
