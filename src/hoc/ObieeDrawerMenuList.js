
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PrintIcon from '@material-ui/icons/Print';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LockIcon from '@material-ui/icons/Lock';
import FolderIcon from '@material-ui/icons/Folder';
import Filter1Icon from '@material-ui/icons/Filter1';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Collapse from '@material-ui/core/Collapse';
//import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import {getText} from '../utils/Utils';
import Divider from '@material-ui/core/Divider';
import {UIContext} from '../Context';

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

export default function ObieeDrawerMenuList(props){

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //const [whichComp,setWhichComp] = React.useState(0);

  const uiContextData = React.useContext(UIContext);

  const handleClick = () => {
    setOpen(!open);
    console.log('handleClickSubItem');    
  };

  const strAnalytics = getText('Analytics');
  const strVisualAnalyzer = getText('Visual Analyzer');
  const strBIPublisher = getText('BI Publisher');

  const strSecurity = getText('Security');
  const strApplicarionRoles = getText('Application roles');
  const strUserApproles = getText('User Approles');
  const strObjectsOfApprole = getText('Objects of Approle');
  const strReports = getText('Reports');
  const strVersion = getText('Version');

  console.log('rendering DrawerMenuList');

  return (
    <div>
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

<ListItem button key={strBIPublisher} onClick={uiContextData.onClickDrawerItem(0)}>
      <ListItemIcon><AssessmentIcon /></ListItemIcon>
      <ListItemText >{strBIPublisher}</ListItemText>
</ListItem>

<ListItem button key={strVisualAnalyzer} >
      <ListItemIcon><AssessmentIcon /></ListItemIcon>
      <ListItemText >{strVisualAnalyzer}</ListItemText>
</ListItem>

<ListItem button key={strAnalytics} >
      <ListItemIcon><AssessmentIcon /></ListItemIcon>
      <ListItemText >{strAnalytics}</ListItemText>
</ListItem>

<Divider />

<ListItem button key={strSecurity} onClick={handleClick}>
    <ListItemIcon><LockIcon /> </ListItemIcon>
    <ListItemText >{strSecurity}</ListItemText>
    <IconButton>
    {
      open ? <ExpandLess /> : <ExpandMore />
    }
    </IconButton>

    </ListItem>

    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem button className={classes.nested}>
            <GroupAddIcon/> 
            <ListItemText>{strApplicarionRoles}</ListItemText>
          </ListItem>

          <ListItem button className={classes.nested} >
            <PersonAddIcon/>
            <ListItemText>{strUserApproles}</ListItemText>
          </ListItem>

          <ListItem button className={classes.nested} onClick={()=>{}}>
            <FolderIcon/>
            <ListItemText>{strObjectsOfApprole}</ListItemText>
          </ListItem>

        </List>
    </Collapse>


    <ListItem button key={strReports} onClick={uiContextData.onClickDrawerItem(4)}>
      <ListItemIcon><PrintIcon /></ListItemIcon>
      <ListItemText >{strReports}</ListItemText>
    </ListItem>

    <Divider />

    <ListItem button key={strVersion}>
      <ListItemIcon><Filter1Icon /></ListItemIcon>
      <ListItemText >{strVersion}</ListItemText>
    </ListItem>

    {/* <Version /> */}

  </List>

  </div>
  )
}
