
import React from 'react';
import ObieeAppBar from './ObieeAppBar';
import ObieeDrawer from './ObieeDrawer';
//import MyAppBar from './MyAppBar';

function Dashboard(props){
    const [openDrawer,setOpenDrawer] = React.useState(false);
    const [systemInfos,setSystemInfos] = React.useState(false);

    return (
        <div>

            <ObieeAppBar 
            open={openDrawer} 
            handleDrawerOpen={()=>{setOpenDrawer(true);}} 
            handleSystemInfos={()=>{alert('handleSystemInfos')}}
            /> 

            <ObieeDrawer 
            open={openDrawer} 
            handleDrawerClose={()=>{setOpenDrawer(false);}}
            systemInfos={systemInfos}
            />

        </div>
    )
}

export default Dashboard;
