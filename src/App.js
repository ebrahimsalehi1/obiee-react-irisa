import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeSigin from './hoc/ObieeSignin';
import data from '../db.json';
import ObieeMaterialTable from './widgets/ObieeMaterialTable';
import ObieeCrudApprole from './hoc/ObieeCrudApprole';
import { TramRounded } from '@material-ui/icons';
import {Router,Route,Switch as SwitchRoute} from 'react-router-dom';

export default function App(){
    const [isAuthenticate,setIsAuthenticate] = React.useState(true);
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login" render={()=>{
                                    !isAuthenticate &&
                                    <ObieeSigin handleLogin={(userName,pass)=>{
                                        if(userName==='admin' && pass==='admin')
                                            setIsAuthenticate(true);
                                        else
                                            setIsAuthenticate(false);
                                    }}/>
                    }}>
                    </Route>
                    <Route path="/tree" component={ObieeMaterialTable}></Route>
                </Switch>
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
            </Router>
        </div>
    );
}

//  <Dashboard /> 
//  <ObieeCrudApprole url={localStorage.esbip+'api/v1.0/approles'}/>
