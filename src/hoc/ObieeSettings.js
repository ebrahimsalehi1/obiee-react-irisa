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


export default function ObieeSettings(){
    const [valTab,setValTab] = React.useState(0);
    const [serviceIpAddress,setServiceIpAddress] = React.useState(localStorage.getItem('ip'));
    const [ESBIpAddress,setESBIpAddress] = React.useState(localStorage.getItem('esbip'));

    return (
<>
        <Card style={{"padding":"40px","box-shadow":"none"}}>
         <ObieeTabs 
         value={valTab}
         handleChange={(event,newValue)=>{
            setValTab(newValue);
         }}
         tabData={
             [
                 {title:'Hosts'},
                 {title:'Systems'},
                 {title:'Users'},
                 {title:'Application Roles'},
                 {title:'Groups'},
             ]
         }
         />

         </Card>

    {valTab === 0 && 
    <Card style={{"padding":"40px","box-shadow":"none"}}>
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
                variant={"outlined"} 
                style={{"width":"75px","margin":"4px"}}
                onClick={e=>{
                    localStorage.setItem('ip',serviceIpAddress);
                    localStorage.setItem('esbip',ESBIpAddress);
                }}
            >Save</Button>
            <Button 
                color={"primary"} 
                variant={"outlined"} 
                style={{"width":"75px","margin":"4px"}}>Cancel</Button>
     </CardActions>
     </Card>
    }

</>
    )
}