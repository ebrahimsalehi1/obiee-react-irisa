import "core-js/stable";
import "regenerator-runtime/runtime";
import "../public/css/style.css";

import React from 'react';
import ReactDOM from 'react-dom';
//import AppRouter from './App';
import AppRouter from './AppRouter';
//import AppRouter from './AppTestComp';

import { create } from 'jss';
import rtl from 'jss-rtl';

import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import {UserContext} from './Context';
// import { AlternateEmail } from '@material-ui/icons';
//import {isSessionValid} from './webservice/Login';
import {getText,readFile,biLogin} from './utils/Utils';

const jssRtl = create({ plugins: [...jssPreset().plugins, rtl()] });

const countries = [
    { code: "US",lang:"en", label: "United States", phone: "1", suggested: true },
    { code: "IR",lang:"fa", label: "Iran, Islamic Republic of", phone: "98",suggested: false }
];

const initialState = {
    language:'en',
    direction:false,
    theme: false,
    shown_component:'show_dashboard_home',
    progress: false,
    userInfo:null,
    hasAdminRole:null,
    messageToShow:{
        type:'info',
        message:''
    },
    isAuthenticated: false,
    formTitle: ""
}   

function reducer(state,action){

    switch(action.type){
        case 'show_dashboard_home':
            return  {
                ...state,
                shown_component:'show_dashboard_home',
                formTitle: getText('Dashboard')
            }
        case 'show_dashboard_transactional':
            return  {
                ...state,
                shown_component:'show_dashboard_transactional',
                formTitle: getText('BI Publisher')
            }
        case 'show_dashboard_analyser':
            return  {
                ...state,
                shown_component:'show_dashboard_analyser',
                formTitle: getText('Visual Analyzer')
            }
        case 'show_dashboard_dashboard':
            return  {
                ...state,
                shown_component:'show_dashboard_dashboard',
                formTitle: getText('Analytics')
            }
        case 'create_dashboard_analyser':   
            biLogin('urlBIVisualAnalyserCreate',null,localStorage.getItem('user'),'biviewer','biviewer12c')
            return  {
                ...state,
            }
        case 'show_users':
            return {
                ...state,
                shown_component:'show_users',
                formTitle: getText('')
            }
        case 'show_approle':
            return {
                ...state,
                shown_component:'show_approle',
                formTitle: getText('Application roles')
            }
        case 'show_user_approle':
            return {
                ...state,
                shown_component:'show_user_approle',
                formTitle: getText('User Approles')
            }
        case 'show_object_approle':
            return {
                ...state,
                shown_component:'show_object_approle',
                formTitle: getText('Objects of Approle')
            }
        case 'show_report':
            return {
                ...state,
                shown_component:'show_report',
                formTitle: getText('')
            }
        case 'show_setting':
            return {
                ...state,
                shown_component:'show_setting',
                formTitle: getText('Setting')
            }
        case 'change_language_en':
            localStorage.setItem("language","en");
            return {
                ...state,
                direction:false,
                language:'en',
            }            
        case 'change_language_fa':
            localStorage.setItem("language","fa");
            return {
                ...state,
                direction:true,
                language:'fa',
            }            
        case 'change_language_de':
            localStorage.setItem("language","de");
            return {
                ...state,
                direction:false,
                language:'de',
            }            
        case 'show_loading':
            return {
                ...state,
                progress: true,
            }                            
        case 'hide_loading':
            return {
                ...state,
                progress: false,
            }  
        case 'change_to_light':
            return {
                ...state,
                theme: false,
            }                            
        case 'change_to_dark':
            return {
                ...state,
                theme: true,
            }  
        case 'show_message':           
            return {
                ...state,
                messageToShow: {
                    type: action.messageToShow.type,
                    message: action.messageToShow.message
                }            
            }  
        case 'hide_message':
            return {
                ...state,
                messageToShow: null            
            }  
        case 'login':
            //localStorage.setItem("isAuthenticated","1");
            return {
                ...state,
                isAuthenticated: action.isAuthenticated, //localStorage.getItem('isAuthenticated')=='1' ,
                shown_component:'show_dashboard_home',
                userInfo: action.userInfo,
                hasAdminRole: action.hasAdminRole
            }  
        case 'logoff':
            //localStorage.setItem("isAuthenticated","0");
            localStorage.setItem("sessionId","0");
            return {
                ...state,
                isAuthenticated: false//localStorage.getItem('isAuthenticated')=='1'
            }                  
        case 'is_session_valid':
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                userInfo: action.userInfo,
                hasAdminRole: action.hasAdminRole
            }  
        default:
            return state;    
    }
}

function IndexComp(props) {    

    const [state,dispatch] = React.useReducer(reducer,initialState);

    React.useEffect(()=>{

        async function loadConfigFie(){
            
            const result = await readFile('config.json');

            if(result){
                localStorage.setItem('config',JSON.stringify(result));
                //alert(0)
            }

        }

        loadConfigFie();

    },[]);

    return (        
    <React.Suspense fallback={<h1>Progress ....</h1>}>
        <UserContext.Provider value={{obieeState:state,obieeDispatch:dispatch}}>
            <StylesProvider jss={jssRtl}>
                <AppRouter/>
            </StylesProvider>
        </UserContext.Provider>
    </React.Suspense>
        
    )
}

ReactDOM.render(<React.StrictMode><IndexComp/></React.StrictMode>,document.getElementById('root'));
