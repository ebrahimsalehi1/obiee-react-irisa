import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from './utils/theme2';
import { create } from 'jss';
import rtl from 'jss-rtl';

import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const jssRtl = create({ plugins: [...jssPreset().plugins, rtl()] });

function IndexComp(props) {    
    const {direction} = props;
    return (
    <>
    {
        direction === 'ltr' && 
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    }
    {
        direction === 'rtl' && 
        <StylesProvider jss={jssRtl}> 
        <MuiThemeProvider theme={theme}>
            <App direction={direction}/>
        </MuiThemeProvider>
        </StylesProvider>
    }    
    </>
    )
}

ReactDOM.render(<IndexComp direction='rtl'/>,document.getElementById('root'));
//ReactDOM.render(<App />,document.getElementById('root'));
