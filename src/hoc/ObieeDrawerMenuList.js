
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import PrintIcon from '@material-ui/icons/Print';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LockIcon from '@material-ui/icons/Lock';
import FolderIcon from '@material-ui/icons/Folder';
//import Filter1Icon from '@material-ui/icons/Filter1';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import Collapse from '@material-ui/core/Collapse';
//import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import {getText} from '../utils/Utils';
import Divider from '@material-ui/core/Divider';
import {UserContext} from '../Context';
import Grid from '@material-ui/core/Grid';
import Copyright from '../widgets/ObieeCopyright';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Link from '@material-ui/core/Link';
//import { Link } from "react-router-dom";
import {getConfigData} from '../utils/Utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function ObieeDrawerMenuList(props){

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //const [whichComp,setWhichComp] = React.useState(0);

  const context = React.useContext(UserContext);

  const handleClick = () => {
    setOpen(!open);
  };

  const strAnalytics = getText('Analytics');
  const strVisualAnalyzer = getText('Visual Analyzer');
  const strBIPublisher = getText('BI Publisher');

  const strSecurity = getText('Security');
  const strApplicarionRoles = getText('Application roles');
  const strUserApproles = getText('User Approles');
  const strObjectsOfApprole = getText('Objects of Approle');
  //const strReports = getText('Reports');
  //const strDashboard = getText('Dashboard');
  const strUserInfo = context.obieeState.userInfo && context.obieeState.userInfo.name ? context.obieeState.userInfo.name : ""; //getText('User');
  const strSetting = getText('Setting');
  const strCreateReport = getText('Create Report');

  //console.log('ObieeDrawerMenuList is rendering',props);

  return (

    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
      className={classes.root}
    >

<ListItem button key={strUserInfo} onClick={()=>context.obieeDispatch({type:'show_setting'})}>
    <Tooltip title={strUserInfo} >
      <ListItemIcon><AccountCircleIcon /></ListItemIcon>
    </Tooltip>  
      <ListItemText >{strUserInfo}</ListItemText>
</ListItem>

<Divider />

<ListItem button key={getText('Main Page')} onClick={()=>context.obieeDispatch({type:'show_dashboard_home'})}>
  <Tooltip title={getText('Main Page')} >
      <ListItemIcon><HomeIcon /></ListItemIcon>
  </Tooltip>    
      <ListItemText >{getText('Main Page')}</ListItemText>
</ListItem>

<ListItem button key={strAnalytics} onClick={()=>context.obieeDispatch({type:'show_dashboard_dashboard'})}>
    <Tooltip title={strAnalytics} >
      <ListItemIcon><DashboardRoundedIcon /></ListItemIcon>
    </Tooltip>  
      <ListItemText >{strAnalytics}</ListItemText>
</ListItem>

<ListItem button key={strVisualAnalyzer} onClick={()=>context.obieeDispatch({type:'show_dashboard_analyser'})}>
    <Tooltip title={strVisualAnalyzer} >
      <ListItemIcon><BarChartRoundedIcon /></ListItemIcon>
    </Tooltip>  
      <ListItemText >{strVisualAnalyzer}</ListItemText>
</ListItem>

<ListItem button key={strBIPublisher} onClick={()=>context.obieeDispatch({type:'show_dashboard_transactional'})}>
    <Tooltip title={strBIPublisher} >
      <ListItemIcon><DescriptionRoundedIcon /></ListItemIcon>
    </Tooltip>  
      <ListItemText >{strBIPublisher}</ListItemText>
</ListItem>

<ListItem button key={strCreateReport} onClick={()=>context.obieeDispatch({type:'create_dashboard_analyser'})} >
    <Tooltip title={strCreateReport} >
      <ListItemIcon><OpenInNewIcon /></ListItemIcon>
    </Tooltip>  
    <ListItemText >{strCreateReport}</ListItemText>
</ListItem>


<Divider />

{context.obieeState.hasAdminRole && 
<ListItem button={props.open} key={strSecurity} onClick={props.open ? handleClick : null}>
    <Tooltip title={strSecurity} >
      <ListItemIcon><LockIcon /> </ListItemIcon>
    </Tooltip>  
    <ListItemText >{strSecurity}</ListItemText>
    <IconButton>
    {
      open ? <ExpandLess /> : <ExpandMore />
    }
    </IconButton>

    </ListItem>
  }
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem button className={classes.nested} onClick={()=>context.obieeDispatch({type:'show_approle'})}>
            <GroupAddIcon/> 
            <ListItemText>{strApplicarionRoles}</ListItemText>
          </ListItem>
          
          <ListItem button className={classes.nested} onClick={()=>context.obieeDispatch({type:'show_user_approle'})}>
            <PersonAddIcon/>
            <ListItemText>{strUserApproles}</ListItemText>
          </ListItem>

          <ListItem button className={classes.nested} onClick={()=>context.obieeDispatch({type:'show_object_approle'})}>
            <FolderIcon/>
            <ListItemText>{strObjectsOfApprole}</ListItemText>
          </ListItem>

        </List>
    </Collapse>



    {/* <ListItem button key={strReports} onClick={e=>context.obieeDispatch({type:'show_report'})}>
      <ListItemIcon><PrintIcon /></ListItemIcon>
      <ListItemText >{strReports}</ListItemText>
    </ListItem> */}

    <Divider />

    <ListItem button key={strSetting} onClick={()=>context.obieeDispatch({type:'show_setting'})}>
      <Tooltip title={strSetting} >
        <ListItemIcon><SettingsIcon /></ListItemIcon>
      </Tooltip>
      <ListItemText >{strSetting}</ListItemText>
    </ListItem>

    {/* <Version /> */}

  </List>

  )
}

export default React.memo(ObieeDrawerMenuList);

