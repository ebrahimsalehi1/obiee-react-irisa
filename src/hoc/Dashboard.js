import React from 'react';

import ObieeCardReport from '../widgets/ObieeCardReport';
import Grid from '@material-ui/core/Grid';
import {UIContext} from '../Context';
import { makeStyles } from '@material-ui/core/styles';
const DataGridDemo = React.lazy(()=>import('../widgets/ObieeTable'));
import {callRestGet,callRestPost,callRestPost2} from '../utils/Utils';

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

    const {systemInfos} = props;

    //const [systemInfos,setSystemInfos] = React.useState([]);
    const [dataReoprt,setDataReport] = React.useState([]);

    // const uiContextData = React.useContext(UIContext);
    // uiContextData.onClickDrawerItem = (which)=>{
    //     setWhichCompShow(which)
    // }

    React.useEffect(()=>{
        //callRestGet('APPROLE_HAS_ADMIN_ROLE',['z.omidvar'])
        callRestPost('REPORT_TRANSACTIONAL',[],{
            "user": "z.omidvar",
            "searchWord":""
        })
        .then(res=>{
            setDataReport(res.data);
        })
        .catch(err=>{
            //setOpenMessage(true);   
        })
    },[]);

    return (
        <div>

            <Grid container spacing={1} className={classes.root} justify={"center"}  direction="row">

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
            <Grid item xs={12} md={12}>
            <DataGridDemo />        
            </Grid>

            </Grid>

        </div>
    )
}

export default Dashboard;
