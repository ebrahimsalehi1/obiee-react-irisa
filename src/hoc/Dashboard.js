
import React from 'react';
import ObieeAppBar from './ObieeAppBar';
import ObieeDrawer from './ObieeDrawer';
import MyAppBar from './MyAppBar';

function Dashboard(props){
    const [openDrawer,setOpenDrawer] = React.useState(false);

    return (
        <div>
            <ObieeAppBar open={openDrawer} handleDrawerOpen={()=>{setOpenDrawer(true);}} />
            {/* <MyAppBar open={openDrawer} handleDrawerOpen={()=>{setOpenDrawer(true);}}/> */}
            <ObieeDrawer open={openDrawer} handleDrawerClose={()=>{setOpenDrawer(false);}}/>
        </div>
    )
}

export default Dashboard;
