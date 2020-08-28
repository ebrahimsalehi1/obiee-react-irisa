import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>(
    {
        root:
        {
            position: "absolute",            
            border: "1px solid black",
            bottom: 0,
            width: "100%",
            height:"60px",
        }
    }
))

export default function ObieeStatusbar({isShow}){

    const classes = useStyles();

    return (
        <>
        { isShow && 
        <Toolbar 
            className={classes.root}
        />
        }
        </>
    )
}