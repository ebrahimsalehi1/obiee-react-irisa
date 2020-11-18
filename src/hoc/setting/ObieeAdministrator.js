import React from 'react';
import Button from '@material-ui/core/Button';
//import SwitchUI from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
//import Typography from '@material-ui/core/Typography';
//import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {makeStyles} from '@material-ui/core/styles';
import {getText} from '../../utils/Utils';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import ObieeButtonOperation from '../../widgets/ObieeButtonOperation';

const useStyles = makeStyles(theme=>({
    root:{
        width:'100%'
    }
}));

export default function ObieeAdministrator(props){

    const classes = useStyles();

    const [serviceIpAddress,setServiceIpAddress] = React.useState(localStorage.getItem('ip'));
    const [ESBIpAddress,setESBIpAddress] = React.useState(localStorage.getItem('esbip'));

    const strServiceIPAddress = getText("ServiceIPAddress");
    const strEsbIPAddress = getText("ESBIPAddress");

    return (
        <Card className={classes.root}>
        <CardContent>
        <FormControl component="fieldset" className={classes.formControl}>
    <FormLabel component="legend">{getText("Administrator Options")}</FormLabel>

        <FormGroup aria-label="position" column>

            <FormControlLabel
            value="start"
            control={
                <TextField  
                label={strServiceIPAddress}
                placeholder={strServiceIPAddress}
                variant={"outlined"}
                fullWidth
                value={serviceIpAddress}
                onChange={(e)=>setServiceIpAddress(e.target.value)}
                />
            }
            //label="Start"
            //labelPlacement="start"
            />

            <FormControlLabel
            value="start"
            control={
                <TextField  
                label={strEsbIPAddress}
                placeholder={strEsbIPAddress}
                variant={"outlined"}
                fullWidth
                value={ESBIpAddress}
                onChange={(e)=>setESBIpAddress(e.target.value)}
                />
            }
            //label="Start"
            //labelPlacement="start"
            />

        </FormGroup>
         </FormControl>
         </CardContent>
         <CardActions>
         <Button 
                    color={"primary"} 
                    variant={"contained"} 
                    onClick={e=>{
                        localStorage.setItem('ip',serviceIpAddress);
                        localStorage.setItem('esbip',ESBIpAddress);
                    }}
                >{getText("Save")}</Button>
         </CardActions>
         </Card>
    )
}