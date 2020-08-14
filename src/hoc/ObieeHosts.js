import React from 'react';
import Button from '@material-ui/core/Button';
import SwitchUI from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import ObieeTabs from '../widgets/ObieeTabs';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    root:{
        width:'100%'
    }
}));

export default function ObieeHosts(props){

    const classes = useStyles();

    const [serviceIpAddress,setServiceIpAddress] = React.useState(localStorage.getItem('ip'));
    const [ESBIpAddress,setESBIpAddress] = React.useState(localStorage.getItem('esbip'));

    return (
        <Card className={classes.root}>
        <CardContent>
            <Grid container spacing={1} >
    
             <Grid item xs={6} md={6}>
                 <TextField  
                    label="Service IP Address"
                    placeholder="Service IP Address"
                    variant={"outlined"}
                    value={serviceIpAddress}
                    onChange={(e)=>setServiceIpAddress(e.target.value)}
                 />
             </Grid>
             <Grid item xs={6} md={6}>
                 <TextField  
                    label="ESB IP Address"
                    placeholder="ESB IP Address"
                    variant={"outlined"}
                    value={ESBIpAddress}
                    onChange={(e)=>setESBIpAddress(e.target.value)}
                    />
             </Grid>
    
    
         </Grid>
         </CardContent>
         <CardActions>
         <Button 
                    color={"primary"} 
                    variant={"contained"} 
                    onClick={e=>{
                        localStorage.setItem('ip',serviceIpAddress);
                        localStorage.setItem('esbip',ESBIpAddress);
                    }}
                >Save</Button>
         </CardActions>
         </Card>
    )
}