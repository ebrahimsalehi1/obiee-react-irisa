import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeAppBar from './hoc/ObieeAppBar';
import ObieeDrawer from './hoc/ObieeDrawer';
import ObieeSigin from './hoc/ObieeSignin';
import data from '../db.json';
import {UserContext,UIContext} from './Context';
import ObieeCrudApprole from './hoc/ObieeCrudApprole';
import ObieeReports from './hoc/ObieeReports';
import ObieeUsers from './hoc/ObieeUsers';
import ObieeCrudUserOfApprole from './hoc/ObieeCrudUserOfApprole';
import ObieeSnackbar from './widgets/ObieeSnackbar';
import ObieeSettings from './hoc/ObieeSettings';

import Grid from '@material-ui/core/Grid';

//import ObieeCrudApprole from './hoc/ObieeCrudApprole';
//import { TramRounded } from '@material-ui/icons';
//import {  BrowserRouter as Router,Route,Switch as SwitchRoute} from 'react-router-dom';
//import { createBrowserHistory } from 'history';

export default function App(props){

    const [isAuthenticate,setIsAuthenticate] = React.useState(true);
    const {handleLogedIn} = React.useContext(UserContext);
    const [openDrawer,setOpenDrawer] = React.useState(false);
    const [whichCompShow,setWhichCompShow] = React.useState(2);
    const [openMessage,setOpenMessage] = React.useState(false);

    return (
        <div>
            {                        
                !isAuthenticate &&
                    (<ObieeSigin handleLogin={(userName,pass)=>{
                        if(userName==='admin' && pass==='admin')
                            setIsAuthenticate(true);
                        else
                            setIsAuthenticate(false);

                        handleLogedIn(isAuthenticate);
                    }}/>)
            
            }


            {isAuthenticate &&                            
                <ObieeAppBar 
                open={openDrawer} 
                handleDrawerOpen={()=>{setOpenDrawer(true);}} 
                handleSettings={()=>{
                    setShowSystemSetting(true);
                    setWhichCompShow(-1);
                    }}
                onHomeClick={()=>{setWhichCompShow(0)}}
                /> 
            }

            <ObieeDrawer 
            open={openDrawer} 
            handleDrawerClose={()=>{setOpenDrawer(false);}}
            isAuthenticate={isAuthenticate}
            //systemInfos={systemInfos}
            >

            <Grid container spacing={1}  justify={"center"}  >

            { whichCompShow===0 &&

                <Dashboard systemInfos={data.systemInfos} whichComp={props.whichComp}/>
            }            

            { whichCompShow===1 &&
                <ObieeUsers url={localStorage.esbip+'api/v1.0/approles'}/>
            }

            { whichCompShow===2 &&
                <ObieeCrudApprole url={localStorage.esbip+'api/v1.0/approles'}/>
            }
            { whichCompShow===3 &&
                <ObieeCrudUserOfApprole url={localStorage.esbip+'api/v1.0/approles'}/>
            }
            { whichCompShow===4 &&
                <ObieeReports url={localStorage.esbip+'api/v1.0/reports'}/>
            }

            { whichCompShow===5 &&
                <ObieeSettings />
            }

            </Grid>
            </ObieeDrawer>

            <ObieeSnackbar
                open={openMessage}
                message={"Error, Somthing goes wrong, \n contact administrator"}
                autoHideDuration={6000}
                handleClose={()=>{
                    setOpenMessage(false);
                }}
            />

            </div>
    );
}

//  <Dashboard /> 
//  <ObieeCrudApprole url={localStorage.esbip+'api/v1.0/approles'}/>
