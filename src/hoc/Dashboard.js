import React from 'react';
import axios from 'axios';
import ObieeCardReport from '../widgets/ObieeCardReport';
import Grid from '@material-ui/core/Grid';
import {UserContext} from '../Context';
import { makeStyles } from '@material-ui/core/styles';
const DataGridDemo = React.lazy(()=>import('../widgets/ObieeTable'));
//import {callRestGet,callRestPost,callRestPost2} from '../utils/Utils';
//import ObieeChart from './ObieeChart1';
import {getText} from '../utils/Utils';

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


//   const rows1 = [
//   { id: 1, caption: 'Snow', description: 'Jon', age: 35 },
//   { id: 2, caption: 'Lannister', description: 'Cersei', age: 42 },
//   { id: 3, caption: 'Lannister', description: 'Jaime', age: 45 },
//   { id: 4, caption: 'Stark', description: 'Arya', age: 16 },
//   { id: 5, caption: 'Targaryen', description: 'Daenerys', age: null },
//   { id: 6, caption: 'Melisandre', description: null, age: 150 },
//   { id: 7, caption: 'Clifford', description: 'Ferrara', age: 44 },
//   { id: 8, caption: 'Frances', description: 'Rossini', age: 36 },
//   { id: 9, caption: 'Roxie', description: 'Harvey', age: 65 },
// ];

  
function Dashboard(props){

    const classes = useStyles();

    const {systemInfos,type} = props;

    //const [systemInfos,setSystemInfos] = React.useState([]);

    //const [urlName,setUrlName] = React.useState('REPORT_TRANSACTIONAL');
    
    const context = React.useContext(UserContext);

    // uiContextData.onClickDrawerItem = (which)=>{
    //     setWhichCompShow(which)
    // }

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
                        selected={item.type===context.obieeState.shown_component}
                        onClick={()=>{
                            switch(item.latinName){
                                case 'Analytics':      
                                    context.obieeDispatch('show_dashboard_analyser');
                                    break;  
                                case 'Visual Analyzer':
                                    context.obieeDispatch('show_dashboard_dashboard');
                                    break;
                                case 'BI Publisher':
                                    context.obieeDispatch('show_dashboard_transactional');
                                    break;
                                default:

                            }
                        }}
                        />
                  </Grid>     
                ))
            }

            {type !== 'REPORT_NONE' &&
            <Grid item xs={12} md={12}>
            <DataGridDemo 
                urlName={context.obieeState.shown_component}
                columns={[
                    //{ field: 'id', headerName: 'ID', width: 70 },
                    { field: 'caption', headerName: getText('Caption'), width: 130 },
                    { field: 'description', headerName: getText('Description'), width: 130 }
                  ]} />        

            </Grid>
            }

            {type === 'REPORT_NONE' &&
            <Grid item xs={12} md={12}>
                {/* <ObieeChart /> */}
            </Grid>
            }

            </Grid>
    )
}

export default Dashboard;
