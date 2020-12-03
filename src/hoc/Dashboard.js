import React from 'react';
import ObieeCardReport from '../widgets/ObieeCardReport';
import Grid from '@material-ui/core/Grid';
import {UserContext} from '../Context';
import { makeStyles } from '@material-ui/core/styles';
//const DataGridDemo = React.lazy(()=>import('../widgets/ObieeTable'));
const ObieeMaterialTable = React.lazy(()=>import('../widgets/ObieeMaterialTable'));
import ObieeChartMonthlyByType from './charts/ObieeChartMonthlyByType';
import ObieeChartPie from './charts/ObieeChartPie';
import ObieeProgress from './charts/ObieeProgress2';
import {ANALYTIC,VISUAL_ANALYSER,BI_PUBLISHER} from '../utils/Constants';
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

  
function Dashboard(props){

    const classes = useStyles();

    const {systemInfos,type} = props;
    
    const context = React.useContext(UserContext);

    return (
            <Grid container spacing={1} className={classes.root} justify={"center"} alignItems={"center"}>

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
                            switch(item.id){
                                case ANALYTIC:      
                                    context.obieeDispatch({type:'show_dashboard_analyser'});
                                    break;  
                                case VISUAL_ANALYSER:
                                    context.obieeDispatch({type:'show_dashboard_dashboard'});
                                    break;
                                case BI_PUBLISHER:
                                    context.obieeDispatch({type:'show_dashboard_transactional'});
                                    break;
                                default:

                            }
                        }}
                        />
                  </Grid>     
                ))
            }

            {type !== 'REPORT_NONE' &&
            <Grid item xs={12} md={12} key={4}>
            <ObieeMaterialTable
                title=""
                columns={[
                    { field: 'caption', title: getText('Caption'), headerStyle: {width: 250} },
                    { field: 'description', title: getText('Description'), headerStyle: {width: 500} }
                ]} 
                url={
                    context.obieeState.shown_component==='show_dashboard_transactional' ? 'REPORT_TRANSACTIONAL' :
                    context.obieeState.shown_component==='show_dashboard_analyser' ? 'REPORT_DASHBOARD'  :
                    context.obieeState.shown_component==='show_dashboard_dashboard' ? 'REPORT_ANALYSER' : ''
                }
                actions={[]}
            />


            {/* <DataGridDemo 
                urlName={context.obieeState.shown_component}
                columns={[
                    { field: 'caption', headerName: getText('Caption'), width: 250 },
                    { field: 'description', headerName: getText('Description'), width: 500 },
                    { field: 'path', hide:true }
                  ]} />    */}

            </Grid>
            }

            {type === 'REPORT_NONE' &&
                systemInfos &&
                systemInfos.map((item,index)=>(
                    <Grid item xs={12} md={3} key={index+5}>
                    <ObieeChartMonthlyByType 
                    key={item.id} 
                    type={item.id} 
                    title={item.latinName+"-"+item.name}
                    />
                </Grid>                
                ))
            }

            {type === 'REPORT_NONE' &&
            <Grid item xs={12} md={3} key={8}>
                <ObieeProgress title={"traffic"+"-"+"ترافیک پورتال"} />
            </Grid>
            }

            {type === 'REPORT_NONE' &&
            <Grid item xs={12} md={3} key={7}>
                <ObieeChartPie />
            </Grid>
            }

            </Grid>
    )
}

export default Dashboard;
