import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import ObieeButtonOperation from './ObieeButtonOperation';
import ObieeDialog from './ObieeDialog';
import {getText} from '../utils/Utils';
import Select from '@material-ui/core/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    margin: 'auto',
   // minWidth: 400,
    minHeight:150
  },
  paper: {
    width: '100%',
    height: 300,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: 400,
  }
}));

export default function ObieePermissionDialog(props){
    const {onClose,onAddPermission,onRemovePermission} = props;

    const [permissionType,setPermissionType] = React.useState(props.permissionType ? props.permissionType : 'Form Control');
    const [customPermissionType,setCustomPermissionType] = React.useState(props.customPermissionType ? props.customPermissionType : []);

    const classes = useStyles();

    console.log('ObieePermissionDialog is rendering');

    return (
        <ObieeDialog 
        title={getText("Permission Dialog")}
        openModal={true}
        //TransitionComponent
        eventClose={onClose}
        actionBar={
        <>
        <ObieeButtonOperation className={classes.button} onExecute={()=>onAddPermission(permissionType,customPermissionType)} title={getText("Add")}/>
        <ObieeButtonOperation className={classes.button} onExecute={()=>onRemovePermission(permissionType,customPermissionType)} title={getText("Delete")}/>
        <ObieeButtonOperation className={classes.button} onExecute={onClose} title={getText("Cancel")}/>
        </>        
        }
        >
        <Grid container spacing={1} className={classes.root}>
        <Grid item xs={12} md={12}>
        <FormControl variant="outlined" fullWidth className={classes.formControl}>        
        <InputLabel id="demo-simple-select-outlined-label">{getText('Permission')}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={permissionType}
          MenuProps={MenuProps}        
          onChange={(e)=>{
            setPermissionType(e.target.value);
          }}        
          label={getText('Permission')}
        >
          <MenuItem key="Full Control" value="Full Control">Full Control</MenuItem>
          <MenuItem key="Modify" value="Modify">Modify</MenuItem>
          <MenuItem key="Open" value="Open">Open</MenuItem>
          <MenuItem key="No Access" value="No Access">No Access</MenuItem>        
          <MenuItem key="Custom" value="Custom">Custom</MenuItem>                
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>  
      <FormControl 
        variant="outlined" 
        fullWidth 
        className={classes.formControl} 
        disabled={permissionType!=='Custom'}>
          <InputLabel id="demo-mutiple-checkbox-label">Custom Options</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={customPermissionType}
            onChange={event=>setCustomPermissionType(event.target.value)}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            <MenuItem key={"READ"} value={"READ"}>
              <Checkbox checked={customPermissionType.indexOf("READ")!==-1} />
              <ListItemText primary={"Read"} />
            </MenuItem>
          
            <MenuItem key={"TRAVERSE"} value={"TRAVERSE"}>
              <Checkbox checked={customPermissionType.indexOf("TRAVERSE")!==-1} />
              <ListItemText primary={"Exceute"} />
            </MenuItem>
  
            <MenuItem key={"WRITE"} value={"WRITE"}>
              <Checkbox checked={customPermissionType.indexOf("WRITE")!==-1} />
              <ListItemText primary={"Write"} />
            </MenuItem>
  
            <MenuItem key={"DELETE"} value={"DELETE"}>
              <Checkbox checked={customPermissionType.indexOf("DELETE")!==-1} />
              <ListItemText primary={"Delete"} />
            </MenuItem>
  
            {/* <MenuItem key={"Change Permissions"} value={"Change Permissions"}>
              <Checkbox checked={customPermissionType.indexOf("Change Permissions")!==-1} />
              <ListItemText primary={"Change Permissions"} />
            </MenuItem> */}
  
            <MenuItem key={"SET OWNERSHIP"} value={"SET OWNERSHIP"}>
              <Checkbox checked={customPermissionType.indexOf("SET OWNERSHIP")!==-1} />
              <ListItemText primary={"Set Ownership"} />
            </MenuItem>
  
            <MenuItem key={"RUN PUBLISHER REPORT"} value={"RUN PUBLISHER REPORT"}>
              <Checkbox checked={customPermissionType.indexOf("RUN PUBLISHER REPORT")!==-1} />
              <ListItemText primary={"Run publisher Report"} />
            </MenuItem>
  
            <MenuItem key={"OPEN"} value={"OPEN"}>
              <Checkbox checked={customPermissionType.indexOf("OPEN")!==-1} />
              <ListItemText primary={"Open"} />
            </MenuItem>

            <MenuItem key={"SCHEDULE PUBLISHER REPORT"} value={"SCHEDULE PUBLISHER REPORT"}>
              <Checkbox checked={customPermissionType.indexOf("SCHEDULE PUBLISHER REPORT")!==-1} />
              <ListItemText primary={"Schedule Publisher Report"} />
            </MenuItem>
  
            <MenuItem key={"VIEW PUBLISHER OUTPUT"} value={"VIEW PUBLISHER OUTPUT"}>
              <Checkbox checked={customPermissionType.indexOf("VIEW PUBLISHER OUTPUT")!==-1} />
              <ListItemText primary={"View Publisher Output"} />
            </MenuItem>
  
          </Select>
        </FormControl>
      
      </Grid>
      </Grid>
      </ObieeDialog>
      );
}
