import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeSigin from './hoc/ObieeSignin';
import data from '../db.json';
//import ObieeMaterialTable from './widgets/ObieeMaterialTable';
//import ObieeCrudApprole from './hoc/ObieeCrudApprole';
//import { TramRounded } from '@material-ui/icons';
import {  BrowserRouter as Router,Route,Switch as SwitchRoute} from 'react-router-dom';
//import { createBrowserHistory } from 'history';

export default function App(){
    const [isAuthenticate,setIsAuthenticate] = React.useState(true);
    return (
            <Router>
                <SwitchRoute>
                    <Route path="/" exact >
                        {
                                    
                            !isAuthenticate ?
                                (<ObieeSigin handleLogin={(userName,pass)=>{
                                    if(userName==='admin' && pass==='admin')
                                        setIsAuthenticate(true);
                                    else
                                        setIsAuthenticate(false);
                                }}/>)
                        
                                :
                                
                                (<Dashboard systemInfos={data.systemInfos}/> )
                        }
                    </Route>
                    <Route path="/login" exact render={()=>{
                                    !isAuthenticate &&
                                    <ObieeSigin handleLogin={(userName,pass)=>{
                                        if(userName==='admin' && pass==='admin')
                                            setIsAuthenticate(true);
                                        else
                                            setIsAuthenticate(false);
                                    }}/>
                            }} >
                                login
                            </Route>
                    <Route path="/tree" exact>
                        {/* <ObieeMaterialTable />                                 */}
                    </Route>

                    <Route>Page not found</Route>            

                </SwitchRoute>

            </Router>
    );
}

//  <Dashboard /> 
//  <ObieeCrudApprole url={localStorage.esbip+'api/v1.0/approles'}/>
