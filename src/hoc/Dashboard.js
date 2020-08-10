
import React from 'react';
import ObieeAppBar from './ObieeAppBar';
import ObieeDrawer from './ObieeDrawer';
import axios from 'axios';
import ObieeSnackbar from '../widgets/ObieeSnackbar';
import ObieeSettings from './ObieeSettings';

function Dashboard(props){

    const [openDrawer,setOpenDrawer] = React.useState(false);
    const [systemInfos,setSystemInfos] = React.useState([]);
    const [showSystemSetting,setShowSystemSetting] = React.useState(false);
    const [openMessage,setOpenMessage] = React.useState(false);

    React.useEffect(()=>{
        axios.get(localStorage.getItem('url-systems'))
        .then(res=>{
            if(res.status===200){
                setSystemInfos(res.data);
                setOpenMessage(false);
            }
        })
        .catch(err=>{
            setOpenMessage(true);
        })
    },[]);

    return (
        <div>

            <ObieeAppBar 
            open={openDrawer} 
            handleDrawerOpen={()=>{setOpenDrawer(true);}} 
            //handleSystemInfos={()=>{alert('handleSystemInfos')}}
            handleSettings={()=>{setShowSystemSetting(!showSystemSetting)}}
            /> 

            <ObieeDrawer 
            open={openDrawer} 
            handleDrawerClose={()=>{setOpenDrawer(false);}}
            systemInfos={systemInfos}
            >

            { showSystemSetting && 
            <ObieeSettings />
            }

            {
                systemInfos &&
                systemInfos.map((item,index)=>(
                <CardReport />

                ))
            }

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
