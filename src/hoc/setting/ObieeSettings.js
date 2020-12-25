import React from 'react';
// import Button from '@material-ui/core/Button';
// import SwitchUI from '@material-ui/core/Switch';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import Checkbox from '@material-ui/core/Checkbox';
import ObieeTabs from '../../widgets/ObieeTabs';
import ObieeTabs2 from '../../widgets/ObieeTabs2';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import {makeStyles} from '@material-ui/core/styles';
import ObieeHosts from './ObieeAdministrator';
import ObieeResetPassword from './ObieeResetPassword';
import ObieeProfile from './ObieeProfile';
import {getText} from '../../utils/Utils';
import {UserContext} from '../../Context';

export default function ObieeSettings(props){

    const [valTab,setValTab] = React.useState(0);
    const {showList} = props;

    const context = React.useContext(UserContext);

    return (
    <>

    <ObieeTabs2 
        value={valTab}
        handleChange={(event,newValue)=>{
        setValTab(newValue);
        }}
        tabData={
            [
            {title:getText('Profile'),id:0},
            //{title:'Systems',id:1},
            //{title:'languages',id:2},
            //{title:'change password',id:3},
            //{title:getText('Admin'),id:4},
            ]
         }
    /> 

    {1===0 &&
        <Card >
            
         <ObieeTabs 
         value={valTab}
         handleChange={(event,newValue)=>{
            setValTab(newValue);
         }}
         tabData={
            [
            {title:getText('Profile'),id:0},
            {title:'Systems',id:1,component:<div>Hello Ebrahim !!!</div>},
            //{title:'languages',id:2},
            //{title:'change password',id:3},
            //{title:getText('Admin'),id:4},
            ]
         }
         />

         </Card>
    }

        {valTab === 0 && showList.filter(item=>item==='profile').length>0 &&
        <ObieeProfile userInfo={context.obieeState.userInfo} />       
        }

        {valTab === 1 && showList.filter(item=>item==='host').length>0 &&
        <ObieeHosts />  
        }

        {valTab === 3 && showList.filter(item=>item==='reset_password').length>0 &&
        <ObieeResetPassword />       
        }
    </>
    )
}
