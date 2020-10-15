import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { create } from 'jss';
import rtl from 'jss-rtl';

import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import {UserContext} from './Context';
//const CircularProgress = React.lazy(()=>  import('@material-ui/core/CircularProgress'));

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
}   

function reducer(state,action){
    console.log(state,action);
    switch(action){
        case 'show_dashboard_home':
            return  {
                ...state,
                shown_component:'show_dashboard_home'
            }
        case 'show_dashboard_transactional':
            return  {
                ...state,
                shown_component:'show_dashboard_transactional'
            }
        case 'show_dashboard_analyser':
            return  {
                ...state,
                shown_component:'show_dashboard_analyser'
            }
        case 'show_dashboard_dashboard':
            return  {
                ...state,
                shown_component:'show_dashboard_dashboard'
            }
        case 'show_users':
            return {
                ...state,
                shown_component:'show_users'
            }
        case 'show_approle':
            return {
                ...state,
                shown_component:'show_approle'
            }
        case 'show_report':
            return {
                ...state,
                shown_component:'show_report'
            }
        case 'show_setting':
            return {
                ...state,
                shown_component:'show_setting'
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
        default:
            return state;    
    }
}

function IndexComp(props) {    

    const [state,dispatch] = React.useReducer(reducer,initialState);
    const countRender = React.useRef(0);

    if(countRender.current === 0){
        fetch('webservices.json',{
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(response=>response.json())
        .then(data=>localStorage.setItem("webservices",JSON.stringify(data)))
        .catch(err=>{
            console.log("err",err);
        });
    
        localStorage.setItem('language','en');  
        localStorage.setItem('user','z.omidvar');
    }
    
    //const [isRightToLeft,setIsRightToLeft] = React.useState(false);
    //const [isDarkTheme,setIsDarkTheme] = React.useState(false);
    //const [whichComp,setWhichComp] = React.useState(4);

    countRender.current++;

    return (        
    <React.Suspense fallback={<h1>Progress ....</h1>}>
        <UserContext.Provider value={{obieeState:state,obieeDispatch:dispatch}}>
            <StylesProvider jss={jssRtl}>
                <App/>
            </StylesProvider>
        </UserContext.Provider>
    </React.Suspense>
        
    )
}

ReactDOM.render(<React.StrictMode><IndexComp/></React.StrictMode>,document.getElementById('root'));
