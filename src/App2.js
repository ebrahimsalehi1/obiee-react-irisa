import React from 'react';
import {UserContext} from './Context';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';


export default function App(props){

    const myContext = React.useContext(UserContext);

    return (
        <div>
           <LinearProgress />

            {/* <ObieeSnackbar
                open={openMessage}
                message={"Error, Somthing goes wrong, \n contact administrator"}
                autoHideDuration={6000}
                handleClose={()=>{
                    setOpenMessage(false);
                }}
            /> */}

            </div>
    );
}

