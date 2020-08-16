
import React from 'react';
import ObieeAppBar from './ObieeAppBar';
import ObieeDrawer from './ObieeDrawer';
import axios from 'axios';
import ObieeSnackbar from '../widgets/ObieeSnackbar';
import ObieeCardReport from '../widgets/ObieeCardReport';
import ObieeSettings from './ObieeSettings';
import Grid from '@material-ui/core/Grid';
import ObieeCrudApprole from './ObieeCrudApprole';
import ObieeReports from './ObieeReports';
import ObieeUsers from './ObieeUsers';
import ObieeCrudUserOfApprole from './ObieeCrudUserOfApprole';

function Dashboard(props){

    const {systemInfos} = props;

    const [openDrawer,setOpenDrawer] = React.useState(false);
    //const [systemInfos,setSystemInfos] = React.useState([]);
    const [showSystemSetting,setShowSystemSetting] = React.useState(false);
    const [openMessage,setOpenMessage] = React.useState(false);
    const [whichCompShow,setWhichCompShow] = React.useState(0);

    React.useEffect(()=>{
        // axios.get(localStorage.getItem('esbip')+"systems")
        // .then(res=>{
        //     if(res.status===200){
        //         setSystemInfos(res.data);
        //         setOpenMessage(false);
        //     }
        // })
        // .catch(err=>{
        //     setOpenMessage(true);
        // })
    },[]);

    return (
        <div>

            <ObieeAppBar 
            open={openDrawer} 
            handleDrawerOpen={()=>{setOpenDrawer(true);}} 
            handleSettings={()=>{
                setShowSystemSetting(!showSystemSetting);
                setWhichCompShow(-1);
                }}
            onHomeClick={()=>{setWhichCompShow(0)}}
            /> 

            <ObieeDrawer 
            open={openDrawer} 
            handleDrawerClose={()=>{setOpenDrawer(false);}}
            systemInfos={systemInfos}
            >

            <Grid container spacing={4} >
            { 
                whichCompShow===-1 &&
                showSystemSetting && 
            <ObieeSettings />
            }

            { 
                whichCompShow===0 &&
                systemInfos &&
                systemInfos.map((item,index)=>(
                  <Grid item xs={12} md={6} key={index}>
                        <ObieeCardReport 
                        key={index} 
                        title={item.name} 
                        subheader={item.latinName}
                        type={item.type}
                        avatarText={item.latinName.substring(0,2)}   
                        onUsers={e=>setWhichCompShow(1)}
                        onApproles={e=>setWhichCompShow(2)}
                        onUserOfApproles={e=>setWhichCompShow(3)} 
                        onReports={e=>setWhichCompShow(4)}
                        onSettings={e=>{
                            setWhichCompShow(-1);
                            setShowSystemSetting(!showSystemSetting);
                        }}
                        />
                  </Grid>     
                ))
            }
            {whichCompShow===1 &&
                <ObieeUsers url={localStorage.esbip+'api/v1.0/approles'}/>
            }

            {whichCompShow===2 &&
                <ObieeCrudApprole url={localStorage.esbip+'api/v1.0/approles'}/>
            }
            {whichCompShow===3 &&
                <ObieeCrudUserOfApprole url={localStorage.esbip+'api/v1.0/approles'}/>
            }
            {whichCompShow===4 &&
                <ObieeReports url={localStorage.esbip+'api/v1.0/reports'}/>
            }
            
            </Grid>

            </ObieeDrawer>

            <ObieeSnackbar
                open={openMessage}
                message={"Error, Somthing goes wrong, \n contact administrator"}
                autoHideDuration={6000}
                handleClose={()=>{
                    setOpenMessage(false);
                }}
            />

        </div>
    )
}

export default Dashboard;
