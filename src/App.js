import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeAppBar from './hoc/ObieeAppBar';
import ObieeDrawer from './hoc/ObieeDrawer';
import ObieeSigin from './hoc/ObieeSignin';
import data from '../db.json';
import {UserContext} from './Context';
import ObieeCrudApprole from './hoc/ObieeCrudApprole';
import ObieeReports from './hoc/ObieeReports';
import ObieeUsers from './hoc/ObieeUsers';
import ObieeCrudUserOfApprole from './hoc/ObieeCrudUserOfApprole';
import ObieeSnackbar from './widgets/ObieeSnackbar';
import ObieeSettings from './hoc/ObieeSettings';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import {MuiThemeProvider} from '@material-ui/core/styles';
import {themeLightLTR} from './utils/theme-light-ltr';
import {themeLightRTL} from './utils/theme-light-rtl';
import {themeDarkLTR} from './utils/theme-dark-ltr';
import {themeDarkRTL} from './utils/theme-dark-rtl';

//import ObieeCrudApprole from './hoc/ObieeCrudApprole';
//import { TramRounded } from '@material-ui/icons';
//import {  BrowserRouter as Router,Route,Switch as SwitchRoute} from 'react-router-dom';
//import { createBrowserHistory } from 'history';


export default function App(props){

    const [isAuthenticate,setIsAuthenticate] = React.useState(true);
    const {handleLogedIn} = React.useContext(UserContext);
    const [openDrawer,setOpenDrawer] = React.useState(false);
    //const [whichCompShow,setWhichCompShow] = React.useState(2);
    const [openMessage,setOpenMessage] = React.useState(false);

    const context = React.useContext(UserContext);

    return (
        <MuiThemeProvider theme={context.obieeState.direction===false ? (context.obieeState.theme ? themeDarkLTR : themeLightLTR) : (!context.obieeState.theme ? themeLightRTL : themeDarkRTL)}>
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

            {context.obieeState.shown_component==='show_dashboard_home' &&

                <Dashboard 
                    systemInfos={data.systemInfos} 
                    whichComp={props.whichComp} 
                    type='REPORT_NONE'/>
            }  

            {context.obieeState.shown_component==='show_dashboard_transactional' &&

                <Dashboard 
                    systemInfos={data.systemInfos} 
                    whichComp={props.whichComp} 
                    type='REPORT_TRANSACTIONAL'/>
            }  

            {context.obieeState.shown_component==='show_dashboard_analyser' &&

                <Dashboard 
                    systemInfos={data.systemInfos} 
                    whichComp={props.whichComp} 
                    type='REPORT_ANALYSER'/>
            }            

            {context.obieeState.shown_component==='show_dashboard_dashboard' &&

                <Dashboard 
                    systemInfos={data.systemInfos} 
                    whichComp={props.whichComp} 
                    type='REPORT_DASHBOARD'/>
            }  

            {context.obieeState.shown_component==='show_user' &&
                <ObieeUsers url={localStorage.esbip+'api/v1.0/approles'}/>
            }

            {context.obieeState.shown_component==='show_approle' &&
                <ObieeCrudApprole url={localStorage.esbip+'api/v1.0/approles'}/>
            }

            {context.obieeState.shown_component==='show_user_approle' &&
                <ObieeCrudUserOfApprole url={localStorage.esbip+'api/v1.0/approles'}/>
            }

            {context.obieeState.shown_component==='show_report' &&
                <ObieeReports url={localStorage.esbip+'api/v1.0/reports'}/>
            }

            {context.obieeState.shown_component==='show_setting' &&
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

            </MuiThemeProvider>
    );
}
