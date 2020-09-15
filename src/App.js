import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeSigin from './hoc/ObieeSignin';
import data from '../db.json';
import {UserContext,UIContext} from './Context';

//import ObieeMaterialTable from './widgets/ObieeMaterialTable';
//import ObieeCrudApprole from './hoc/ObieeCrudApprole';
//import { TramRounded } from '@material-ui/icons';
import {  BrowserRouter as Router,Route,Switch as SwitchRoute} from 'react-router-dom';
//import { createBrowserHistory } from 'history';

export default function App(props){
    const [isAuthenticate,setIsAuthenticate] = React.useState(true);
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
                    
                    (<UIContext.Provider value={{onClickDrawerItem:null}}><Dashboard systemInfos={data.systemInfos} whichComp={props.whichComp}/></UIContext.Provider>)
            }

            </div>
    );
}

//  <Dashboard /> 
//  <ObieeCrudApprole url={localStorage.esbip+'api/v1.0/approles'}/>
