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
import ObieeHosts from './ObieeHosts';

export default function ObieeSettings(){

    const [valTab,setValTab] = React.useState(0);

    return (
<>
        <Card >
         <ObieeTabs 
         value={valTab}
         handleChange={(event,newValue)=>{
            setValTab(newValue);
         }}
         tabData={
             [
                 {title:'Hosts'},
                 {title:'Systems'},
                 {title:'languages'},
                 {title:'change password'},
                 {title:'profile'},
             ]
         }
         />

         </Card>

    {valTab === 0 && 
     <ObieeHosts />       
    }

</>
    )
}