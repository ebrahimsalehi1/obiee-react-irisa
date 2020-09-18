import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {themeLightLTR} from './utils/theme-light-ltr';
import {themeLightRTL} from './utils/theme-light-rtl';
import {themeDarkLTR} from './utils/theme-dark-ltr';
import {themeDarkRTL} from './utils/theme-dark-rtl';
import { create } from 'jss';
import rtl from 'jss-rtl';

import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import {UserContext} from './Context';

//import '../i18next';
//import {useTranslation} from 'react-i18next';

const jssRtl = create({ plugins: [...jssPreset().plugins, rtl()] });

const countries = [
    { code: "US",lang:"en", label: "United States", phone: "1", suggested: true },
    { code: "IR",lang:"fa", label: "Iran, Islamic Republic of", phone: "98",suggested: false }
  ];

function IndexComp(props) {    

    const [isRightToLeft,setIsRightToLeft] = React.useState(false);
    const [isDarkTheme,setIsDarkTheme] = React.useState(false);
    const [whichComp,setWhichComp] = React.useState(4);

    //const { i18n } = useTranslation();
    //i18n.init({ lng: countries[0].lang });
    //console.log("index",(isRightToLeft===false ? (isDarkTheme ? themeDarkLTR : themeLightLTR) : (!isDarkTheme ? themeLightRTL : themeDarkRTL)).type);

    return (        
    <React.Suspense fallback={<h1>Loading profile...</h1>}>
        <UserContext.Provider value={{
            direction:isRightToLeft,
            theme: !isDarkTheme,
            //isLogedin: false,
            handleChangeDirection: ()=>{
                setIsRightToLeft(!isRightToLeft);
                console.log('isRightToLeft',isRightToLeft)
                //localStorage.setItem("language",isRightToLeft ? countries[0].lang : countries[1].lang);
            },
            handleChangeTheme: ()=>{
                setIsDarkTheme(!isDarkTheme);
            },
            handleLogedIn: (pisLogedIn)=>{
                //setIsLogedIn(pisLogedIn);
                return pisLogedIn;
            } 
        }}>
            <StylesProvider jss={jssRtl}>
            <MuiThemeProvider theme={isRightToLeft===false ? (isDarkTheme ? themeDarkLTR : themeLightLTR) : (!isDarkTheme ? themeLightRTL : themeDarkRTL)}>
                <App/>
            </MuiThemeProvider>
            </StylesProvider>
        </UserContext.Provider>
    </React.Suspense>
        
    )
}

localStorage.setItem('language','en');
ReactDOM.render(<React.StrictMode><IndexComp/></React.StrictMode>,document.getElementById('root'));
