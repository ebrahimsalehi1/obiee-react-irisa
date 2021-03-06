import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeAppBar from './hoc/ObieeAppBar';
import ObieeDrawer from './hoc/ObieeDrawer';
import ObieeSigin from './hoc/ObieeSignin';
import {UserContext} from './Context';
import ObieeApprole from './hoc/Security/ObieeApprole';
import ObieeReports from './hoc/ObieeReports';
import ObieeUsers from './hoc/ObieeUsers';
import ObieeAssignUserToApprole from './hoc/Security/ObieeAssignUserToApprole';
import ObieeAssignObjectToApprole from './hoc/Security/ObieeAssignObjectToApprole';
import ObieeSettings from './hoc/setting/ObieeSettings';
import Grid from '@material-ui/core/Grid';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';

import data from '../db.json';

import {themeLightLTR} from './utils/theme-light-ltr';
import {themeLightRTL} from './utils/theme-light-rtl';
import {themeDarkLTR} from './utils/theme-dark-ltr';
import {themeDarkRTL} from './utils/theme-dark-rtl';

//import { TramRounded } from '@material-ui/icons';
//import {  BrowserRouter as Router,Route,Switch as SwitchRoute} from 'react-router-dom';
//import { createBrowserHistory } from 'history';

/*
const themeLightLTR = createMuiTheme({
    direction: 'ltr',    
    palette:{
        type:"light"
    }
});

const themeLightRTL = createMuiTheme({
    direction: 'rtl',    
    palette:{
        type:"light"
    }
});

const themeDarkLTR = createMuiTheme({
    direction: 'ltr',    
    palette:{
        type:"dark"
    }
});

const themeDarkRTL = createMuiTheme({
    direction: 'rtl',    
    palette:{
        type:"dark"
    }
});
*/

export default function App(props){

    const [openDrawer,setOpenDrawer] = React.useState(false);

    const context = React.useContext(UserContext);

    // const themeMain = createMuiTheme({
    //     direction: context.obieeState.direction ? 'rtl':'ltr',    
    //     palette:{
    //         type:context.obieeState.theme ? "dark":"light"
    //     }
    // });    

    //const themeMain = context.obieeState.direction===false ? (context.obieeState.theme ? themeDarkLTR : themeLightLTR) : (!context.obieeState.theme ? themeLightRTL : themeDarkRTL);
    const themeMain = themeLightRTL;

    //<MuiThemeProvider theme={context.obieeState.direction===false ? (context.obieeState.theme ? themeDarkLTR : themeLightLTR) : (!context.obieeState.theme ? themeLightRTL : themeDarkRTL)}>

    return (
        <MuiThemeProvider theme={themeMain}>

            <ObieeAppBar 
            open={openDrawer} 
            handleDrawerOpen={()=>{setOpenDrawer(!openDrawer);}} 
            handleSettings={()=>{
                setShowSystemSetting(true);
                setWhichCompShow(-1);
                }}
            onHomeClick={()=>{setWhichCompShow(0)}}
            /> 

            <ObieeDrawer 
            open={openDrawer} 
            handleDrawerClose={()=>{setOpenDrawer(false);}}
            >

            <Grid container spacing={1} justify={"center"}>

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
                <ObieeApprole url={localStorage.esbip+'api/v1.0/approles'}/>
            }

            {context.obieeState.shown_component==='show_user_approle' &&
                <ObieeAssignUserToApprole url={localStorage.esbip+'api/v1.0/approles'}/>
            }

            {context.obieeState.shown_component==='show_object_approle' &&
                <ObieeAssignObjectToApprole />
            }

            {context.obieeState.shown_component==='show_report' &&
                <ObieeReports url={localStorage.esbip+'api/v1.0/reports'}/>
            }

            {context.obieeState.shown_component==='show_setting' &&
                <ObieeSettings showList={['profile','features']}/>
            }

            </Grid>
            </ObieeDrawer>

            </MuiThemeProvider>
    );
}
