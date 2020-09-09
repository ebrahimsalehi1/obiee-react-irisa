
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
import Collapse from '@material-ui/core/Collapse';
//import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import {getText} from '../utils/Utils';
import Divider from '@material-ui/core/Divider';

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

const ListItemComp = ({text,handleClick,includeSubItem,handleClickSubItem,open,icon}) => {

  const classes = useStyles();  

  return ( 
  <div>
    <ListItem button key={text} onClick={handleClick}>
    <ListItemIcon><InboxIcon /> </ListItemIcon>
    <ListItemText >{text}</ListItemText>
    <IconButton>
    {
      includeSubItem ? (open ? <ExpandLess /> : <ExpandMore />) : null
    }
    </IconButton>
    </ListItem>

    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={handleClickSubItem}>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
    </Collapse>

  </div>
)
}

export default function ObieeDrawerMenuList(){

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log('handleClickSubItem');
    
  };

  const strSecurity = getText('Security');
  const strApplicarionRoles = getText('Application roles');
  const strUserApproles = getText('User Approles');
  const strObjectsOfApprole = getText('Objects of Approle');
  const strReports = getText('Reports');
  const strVersion = getText('Version');

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

          <ListItem button className={classes.nested} onClick={()=>{}}>
            <GroupAddIcon/> 
            <ListItemText>{strApplicarionRoles}</ListItemText>
          </ListItem>

          <ListItem button className={classes.nested} onClick={()=>{}}>
            <PersonAddIcon/>
            <ListItemText>{strUserApproles}</ListItemText>
          </ListItem>

          <ListItem button className={classes.nested} onClick={()=>{}}>
            <FolderIcon/>
            <ListItemText>{strObjectsOfApprole}</ListItemText>
          </ListItem>

        </List>
    </Collapse>


    <ListItem button key={strReports}>
      <ListItemIcon><PrintIcon /></ListItemIcon>
      <ListItemText >{strReports}</ListItemText>
    </ListItem>

    <Divider />

    <ListItem button key={strReports}>
      <ListItemIcon><Filter1Icon /></ListItemIcon>
      <ListItemText >{strVersion}</ListItemText>
    </ListItem>

    {/* <Version /> */}

  </List>

  </div>
  )
}
