import React from 'react';
import {UserContext} from './Context';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';

import {themeLightRTL} from './utils/theme-light-rtl';
import ObieePermissionDialog from './widgets/ObieePermissionDialog'

export default function App(props){

    const [open,setOpen] = React.useState(false);

    const context = React.useContext(UserContext);

    const themeMain = themeLightRTL;


    return (
        <MuiThemeProvider theme={themeMain}>
            <button onClick={()=>setOpen(true)}>click me</button>
        {open &&
        <ObieePermissionDialog 
        onClose={()=>setOpen(false)}
        itemAccessPermissions={[
            {
                "account": {
                    "name": "smm2",
                    "guid": "smm2",
                    "type": 4,
                    "displayname": "محمد"
                },
                "permission": {
                    "accessModeList": [
                        {
                            "accessValue": 2048,
                            "acessLabel": "RUNREPORT"
                        },
                        {
                            "accessValue": 2,
                            "acessLabel": "TRAVERSE"
                        },
                        {
                            "accessValue": 1,
                            "acessLabel": "READ"
                        }
                    ],
                    "accessPermission": {
                        "accessValue": 2051,
                        "acessLabel": "EXECUTE"
                    }
                }
            }
            ]}
        />

        }
        </MuiThemeProvider>
    );
}
