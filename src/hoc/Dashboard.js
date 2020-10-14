import React from 'react';
import axios from 'axios';
import ObieeCardReport from '../widgets/ObieeCardReport';
import Grid from '@material-ui/core/Grid';
import {UserContext} from '../Context';
import { makeStyles } from '@material-ui/core/styles';
const DataGridDemo = React.lazy(()=>import('../widgets/ObieeTable'));
//import {callRestGet,callRestPost,callRestPost2} from '../utils/Utils';
import ObieeChart from './ObieeChart';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    // paper: {
    //   height: 140,
    //   width: 100,
    // },
    // control: {
    //   padding: theme.spacing(2),
    // },
  }));

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'caption', headerName: 'caption', width: 130 },
    { field: 'description', headerName: 'description', width: 130 }
  ];

  const rows1 = [
  { id: 1, caption: 'Snow', description: 'Jon', age: 35 },
  { id: 2, caption: 'Lannister', description: 'Cersei', age: 42 },
  { id: 3, caption: 'Lannister', description: 'Jaime', age: 45 },
  { id: 4, caption: 'Stark', description: 'Arya', age: 16 },
  { id: 5, caption: 'Targaryen', description: 'Daenerys', age: null },
  { id: 6, caption: 'Melisandre', description: null, age: 150 },
  { id: 7, caption: 'Clifford', description: 'Ferrara', age: 44 },
  { id: 8, caption: 'Frances', description: 'Rossini', age: 36 },
  { id: 9, caption: 'Roxie', description: 'Harvey', age: 65 },
];

  
const rows = 
  [
    {
        "path": "/shared/Transactional Report/CSS/REPORTS/MMMMMMMMMMMMMMMM.xdo",
        "caption": "MMMMMMMMMMMMMMMM.xdo",
        "description": "مممممممممممممممممم",
        "laseModified": "2020-10-07T10:36:15.000+0000",
        "created": "2020-09-06T12:40:39.000+0000",
        "creator": {
            "name": "weblogic",
            "guid": "weblogic",
            "type": 0,
            "displayname": "weblogic"
        },
        "lastModifier": {
            "name": "weblogic",
            "guid": "weblogic",
            "type": 0,
            "displayname": "weblogic"
        },
        "owner": {
            "name": "weblogic",
            "guid": "weblogic",
            "type": 0,
            "displayname": "weblogic"
        },
        "signature": "",
        "linkPath": "",
        "type": {
            "value": "Report"
        },
        "itemAccessPermissions": [
            {
                "account": {
                    "name": "BIServiceAdministrator",
                    "guid": "BIServiceAdministrator",
                    "type": 4,
                    "displayname": "BI Service Administrator"
                },
                "permission": {
                    "accessModeList": [
                        {
                            "accessValue": 8192,
                            "acessLabel": "VIEWREPORTOUTPUT"
                        },
                        {
                            "accessValue": 4096,
                            "acessLabel": "SCHEDULEREPORT"
                        },
                        {
                            "accessValue": 2048,
                            "acessLabel": "RUNREPORT"
                        },
                        {
                            "accessValue": 32,
                            "acessLabel": "TAKEOWNERSHIP"
                        },
                        {
                            "accessValue": 16,
                            "acessLabel": "ASSIGNPERMISSION"
                        },
                        {
                            "accessValue": 8,
                            "acessLabel": "DELETE"
                        },
                        {
                            "accessValue": 4,
                            "acessLabel": "WRITE"
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
                        "accessValue": 65535,
                        "acessLabel": "FULLCONTROLL"
                    }
                }
            },
            {
                "account": {
                    "name": "z.omidvar",
                    "guid": "z.omidvar",
                    "type": 0,
                    "displayname": "z.omidvar"
                },
                "permission": {
                    "accessModeList": [
                        {
                            "accessValue": 8,
                            "acessLabel": "DELETE"
                        },
                        {
                            "accessValue": 4,
                            "acessLabel": "WRITE"
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
                        "accessValue": 15,
                        "acessLabel": "MODIFY"
                    }
                }
            }
        ],
        "subCatalogItems": null,
        "properties": {
            "bip:AUTHOR": "weblogic",
            "bip:MODIFIED": "1597483688421",
            "Build": "12.2.1.3.0 (Build BIPS-20170820114118 64-bit)",
            "compositeSignature": ".xdo",
            "Desc": "مممممممممممممممممم",
            "bip:OBJ_TYPE": "ReportItem",
            "bip:propertyMap": "1"
        },
        "userPermission": null
    },
    {
        "path": "/shared/Transactional Report/CSS/REPORTS/test2.xdo",
        "caption": "test2.xdo",
        "description": "",
        "laseModified": "2020-09-20T06:16:28.000+0000",
        "created": "2020-09-06T12:40:39.000+0000",
        "creator": {
            "name": "weblogic",
            "guid": "weblogic",
            "type": 0,
            "displayname": "weblogic"
        },
        "lastModifier": {
            "name": "z.omidvar",
            "guid": "z.omidvar",
            "type": 0,
            "displayname": "z.omidvar"
        },
        "owner": {
            "name": "z.omidvar",
            "guid": "z.omidvar",
            "type": 0,
            "displayname": "z.omidvar"
        },
        "signature": "",
        "linkPath": "",
        "type": {
            "value": "Report"
        },
        "itemAccessPermissions": [
            {
                "account": {
                    "name": "BIServiceAdministrator",
                    "guid": "BIServiceAdministrator",
                    "type": 4,
                    "displayname": "BI Service Administrator"
                },
                "permission": {
                    "accessModeList": [
                        {
                            "accessValue": 8192,
                            "acessLabel": "VIEWREPORTOUTPUT"
                        },
                        {
                            "accessValue": 4096,
                            "acessLabel": "SCHEDULEREPORT"
                        },
                        {
                            "accessValue": 2048,
                            "acessLabel": "RUNREPORT"
                        },
                        {
                            "accessValue": 32,
                            "acessLabel": "TAKEOWNERSHIP"
                        },
                        {
                            "accessValue": 16,
                            "acessLabel": "ASSIGNPERMISSION"
                        },
                        {
                            "accessValue": 8,
                            "acessLabel": "DELETE"
                        },
                        {
                            "accessValue": 4,
                            "acessLabel": "WRITE"
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
                        "accessValue": 65535,
                        "acessLabel": "FULLCONTROLL"
                    }
                }
            },
            {
                "account": {
                    "name": "z.omidvar",
                    "guid": "z.omidvar",
                    "type": 0,
                    "displayname": "z.omidvar"
                },
                "permission": {
                    "accessModeList": [
                        {
                            "accessValue": 8,
                            "acessLabel": "DELETE"
                        },
                        {
                            "accessValue": 4,
                            "acessLabel": "WRITE"
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
                        "accessValue": 15,
                        "acessLabel": "MODIFY"
                    }
                }
            }
        ],
        "subCatalogItems": null,
        "properties": {
            "bip:AUTHOR": "a.salimian",
            "bip:MODIFIED": "1597488928897",
            "Build": "12.2.1.3.0 (Build BIPS-20170820114118 64-bit)",
            "compositeSignature": ".xdo",
            "bip:OBJ_TYPE": "ReportItem",
            "bip:propertyMap": "1"
        },
        "userPermission": null
    }
];

function Dashboard(props){

    const classes = useStyles();

    const {systemInfos,type} = props;

    //const [systemInfos,setSystemInfos] = React.useState([]);

    const [rows,setRows] = React.useState([{ id: 1, caption: 'Snow', description: 'Jon', age: 35 }]);
    
    const uiContextData = React.useContext(UserContext);

    // uiContextData.onClickDrawerItem = (which)=>{
    //     setWhichCompShow(which)
    // }

    // React.useEffect( ()=>{
    //     console.log("dashboard type",type);
    //     switch(type){
    //         case 'REPORT_TRANSACTIONAL':
    //             callRestPost('REPORT_TRANSACTIONAL',[],{
    //                 "user": "z.omidvar",
    //                 "searchWord":""
    //             })
    //             .then(res=>{
    //                 setRows(res.data);
    //                 console.log("Dashboard,data",res);
    //             })
    //             .catch(err=>{
    //             });
    //             break;
    //         case 'REPORT_ANALYSER':
    //             callRestPost('REPORT_ANALYSER',[],{
    //                 "user": "z.omidvar",
    //                 "searchWord":""
    //             })
    //             .then(res=>setRows(res.data))
    //             .catch(err=>{
    //             });
    //             break;
    //         case 'REPORT_DASHBOARD':
    //             callRestPost('REPORT_DASHBOARD',[],{
    //                 "user": "z.omidvar",
    //                 "searchWord":""
    //             })
    //             .then(res=>setRows(res.data))
    //             .catch(err=>{
    //             });
    //             break;
    //         default:
    //             console.log('nothing selected in dashboard');
    //     }
    // },[]);

    return (
            <Grid container spacing={1} className={classes.root} justify={"center"}  >

            { 
                systemInfos &&
                systemInfos.map((item,index)=>(
                  <Grid item key={index} xs={4} md={4}>
                        <ObieeCardReport    
                        key={index} 
                        title={item.name} 
                        subheader={item.latinName}
                        type={item.type}
                        avatarText={item.latinName.substring(0,2)}   
                        onClick={e=>console.log(item.latinName)}
                        />
                  </Grid>     
                ))
            }

            {type !== 'REPORT_NONE' &&
            <Grid item xs={12} md={12}>
            <DataGridDemo urlName='REPORT_TRANSACTIONAL' columns={columns} rows={rows1}/>        
            </Grid>
            }

            {type === 'REPORT_NONE' &&
            <Grid item xs={12} md={12}>
                <ObieeChart />
            </Grid>
            }

            </Grid>
    )
}

export default Dashboard;
