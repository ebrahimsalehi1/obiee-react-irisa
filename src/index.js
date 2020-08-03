import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {themeLightLTR} from './utils/theme-light-ltr';
import {themeLightRTL} from './utils/theme-light-rtl';
import { create } from 'jss';
import rtl from 'jss-rtl';

import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import UserContext from './Context';

const jssRtl = create({ plugins: [...jssPreset().plugins, rtl()] });

function IndexComp(props) {    

    const [userDetails,setUserDetails] = React.useState(
            false
    );

    return (
        <UserContext.Provider value={ {
            direction:userDetails,
            handleChange: ()=>{
                setUserDetails(!userDetails);
            }
        }}>
            <StylesProvider jss={jssRtl}>
            <MuiThemeProvider theme={userDetails===false ? themeLightLTR : themeLightRTL}>
                <App/>
            </MuiThemeProvider>
            </StylesProvider>
        </UserContext.Provider>
    )
}

ReactDOM.render(<IndexComp/>,document.getElementById('root'));
