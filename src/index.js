import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {themeLightLTR} from './utils/theme-light-ltr';
import {themeLightRTL} from './utils/theme-light-rtl';
import { create } from 'jss';
import rtl from 'jss-rtl';

import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const jssRtl = create({ plugins: [...jssPreset().plugins, rtl()] });

function IndexComp(props) {    
    const {direction} = props;
    return (
        <>
            <StylesProvider jss={jssRtl}>
            <MuiThemeProvider theme={direction==='ltr' ? themeLightLTR : themeLightRTL}>
                <App/>
            </MuiThemeProvider>
            </StylesProvider>

        </>
    )
}

ReactDOM.render(<IndexComp direction='ltr'/>,document.getElementById('root'));
