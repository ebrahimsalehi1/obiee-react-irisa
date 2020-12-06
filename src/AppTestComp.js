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
        // itemAccessPermissions={[
        //     {
        //         "account": {
        //             "name": "smm2",
        //             "guid": "smm2",
        //             "type": 4,
        //             "displayname": "محمد"
        //         },
        //         "permission": {
        //             "accessModeList": [
        //                 {
        //                     "accessValue": 2048,
        //                     "accessLabel": "RUNREPORT"
        //                 },
        //                 {
        //                     "accessValue": 2,
        //                     "accessLabel": "TRAVERSE"
        //                 },
        //                 {
        //                     "accessValue": 1,
        //                     "accessLabel": "READ"
        //                 }
        //             ],
        //             "accessPermission": {
        //                 "accessValue": 2051,
        //                 "accessLabel": "EXECUTE"
        //             }
        //         }
        //     }
        //     ]}
        itemAccessPermissions={[]}
        approles={
            [
                {
                    "displayName": "BI Consumer",
                    "name": "BIConsumer",
                    "gUID": "66F340154D414B9DBD16DCEDBC7CC7A9",
                    "description": "Users granted this role can consume content but are restricted in what they can create.",
                    "appId": "obi",
                    "type": null,
                    "baseRoles": [],
                    "members": null
                },
                {
                    "displayName": null,
                    "name": "AAC_MAIN_GRP",
                    "gUID": "E51C14C9B7574654804E7462D44849C6",
                    "description": null,
                    "appId": "obi",
                    "type": null,
                    "baseRoles": [],
                    "members": null
                },
                {
                    "displayName": null,
                    "name": "FND_AC_GRP",
                    "gUID": "EE4822725F8D476AA59F59C9EBDED3E7",
                    "description": null,
                    "appId": "obi",
                    "type": null,
                    "baseRoles": [
                        {
                            "displayName": "BIServiceAdministrator",
                            "name": "BIServiceAdministrator",
                            "gUID": "0A49D90D07E24897B888349762B59D7A",
                            "description": "Users granted this role can consume content but are restricted in what they can create.",
                            "appId": "obi",
                            "type": null,
                            "baseRoles": [],
                            "members": null
                        }
                    ],
                    "members": null
                },
                {
                    "displayName": "محمد",
                    "name": "smm2",
                    "gUID": "01D3D9FABAFF4560B8B2F115FF8601D9",
                    "description": "smm",
                    "appId": "obi",
                    "type": "AN",
                    "baseRoles": [
                        {
                            "displayName": "BIServiceAdministrator",
                            "name": "BIServiceAdministrator",
                            "gUID": "0A49D90D07E24897B888349762B59D7A",
                            "description": "Users granted this role can consume content but are restricted in what they can create.",
                            "appId": "obi",
                            "type": null,
                            "baseRoles": [],
                            "members": null
                        }
                    ],
                    "members": null
                }                    
            ]
        }
        onAddPermission={(itemAccessPermissions)=>{
            console.log('onAddPermission',itemAccessPermissions);
        }}
        onRemovePermission={(itemAccessPermissions)=>{
            console.log('onRemovePermission',itemAccessPermissions);
        }}
        />

        }
        </MuiThemeProvider>
    );
}
