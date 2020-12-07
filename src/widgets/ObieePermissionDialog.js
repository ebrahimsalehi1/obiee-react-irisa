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
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import { createFilterOptions } from '@material-ui/lab/Autocomplete';

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


// const CustomData = [
//   {accessValue:0,accessLabel:"CUSTOM",title:"Custom"},
//   {accessValue:1,accessLabel:"READ",title:"Read"},
//   {accessValue:2,accessLabel:"TRAVERSE",title:"Traverse"},
//   {accessValue:4,accessLabel:"WRITE",title:"Write"},
//   {accessValue:8,accessLabel:"DELETE",title:"Delete"},
//   {accessValue:32,accessLabel:"SET OWNERSHIP",title:"Set Ownership"},
//   {accessValue:2048,accessLabel:"RUNREPORT",title:"Run Report"},
//   {accessValue:2051,accessLabel:"OPEN",title:"Open"},
//   {accessValue:4096,accessLabel:"SCHEDULE PUBLISHER REPORT",title:"Schedule Publisher Report"},
//   {accessValue:8192,accessLabel:"VIEW PUBLISHER OUTPUT",title:"View Publisher Output"},
// ];

const CustomData2 = [
  {accessValue:0,accessLabel:"NO ACCESS"},
  {accessValue:1,accessLabel:"READ"},
  {accessValue:2,accessLabel:"TRAVERSE"},
  {accessValue:4,accessLabel:"WRITE"},
  {accessValue:8,accessLabel:"DELETE"},
  {accessValue:16,accessLabel:"ASSIGN PERMISSION"},
  {accessValue:32,accessLabel:"SET OWNERSHIP"},
  {accessValue:2048,accessLabel:"RUNREPORT"},
  //{accessValue:2051,accessLabel:"EXECUTE"}, OPEN
  {accessValue:4096,accessLabel:"SCHEDULE PUBLISHER REPORT"},
  {accessValue:8192,accessLabel:"VIEW PUBLISHER OUTPUT"},
];

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
    minWidth: 500,
    maxWidth: 600,
  }
}));

// const filterOptions = createFilterOptions({
//   matchFrom: 'start',
//   stringify: (option) => option.accessLabel,
// });

export default function ObieePermissionDialog(props){
    const {actionType,approles,onClose,onAddPermission,onRemovePermission} = props;  //  props.itemAccessPermissions

    function intersection(a, b) {
      return a.filter((value) => b.indexOf(value.name) !== -1);
    }

    function intersectionCustom(a, b) {
      return a.filter((value) => b.indexOf(value.accessValue) !== -1);
    }

    const [permissionType,setPermissionType] = React.useState(null);
    const [customPermissionType,setCustomPermissionType] = React.useState([]);    
    const [selectedApprole,setSelectedApprole] = React.useState(null);
    //const [flag,setFlag] = React.useState(false);

    const classes = useStyles();

    console.log('ObieePermissionDialog is rendering',actionType);

    return (
        <ObieeDialog 
        title={getText("Permission Dialog")}
        openModal={true}
        //TransitionComponent
        eventClose={onClose}
        actionBar={
        <>
        <ObieeButtonOperation className={classes.button} onExecute={onClose} title={getText("Cancel")}/>
        {actionType==='add' && 
        <ObieeButtonOperation className={classes.button} onExecute={async ()=>{await onAddPermission(props.itemAccessPermissions)}} title={getText("Add")}/>
        }
        {actionType==='remove' && 
        <ObieeButtonOperation className={classes.button} onExecute={async ()=>{await onRemovePermission(props.itemAccessPermissions)}} title={getText("Delete")}/>
        }
        </>        
        }
        >
        <Box className={classes.formControl}>
        <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} md={12}>
        {/*<InputLabel id="demo-mutiple-checkbox-label">Custom Options</InputLabel> */}
        <Autocomplete
          multiple
          id="combo-box-demo"
          options={approles}
          disableCloseOnSelect
          getOptionLabel={(option) => option.displayName ? option.displayName : option.name}
          fullWidth
          defaultValue={intersection(approles,props.itemAccessPermissions.map(obj=>obj.account.name))}
          onChange={(e,approle)=>{
            const newData = new Set(approle);
            approle.forEach(item=>{
              newData.add(item);
            })

            const newDataArr = [...newData];
            const addToAccessPermissions = newDataArr.filter(item=>props.itemAccessPermissions.map(obj=>obj.account.name).indexOf(item.name)===-1);
            //console.log('addToAccessPermissions',addToAccessPermissions);

            addToAccessPermissions.forEach(item=>{
              props.itemAccessPermissions.push(
                {
                  account: {
                      name: item.name
                  },
                  permission: {
                      accessModeList: [],
                      accessPermission: {
                        accessValue: 0,
                        accessLabel: ""
                      }
                  }
                }
              );
            });

            //const removeFromAccessPermissions = props.itemAccessPermissions.filter(item=>newDataArr.map(obj=>obj.name).indexOf(item.account.name)===-1);
            //console.log('removeFromAccessPermissions',removeFromAccessPermissions);
          }}
          renderInput={(params) => <TextField {...params} label="approles" variant="outlined" />}
          renderOption={(option, { selected }) =>  (
            <React.Fragment>
              <Checkbox
                //icon={icon}
                //checkedIcon={checkedIcon}
                //style={{ marginRight: 8 }}
                checked={selected}
                //selectedApproles.filter(item=>item.name===option.name).length==1}   
              />
              {option.displayName ? option.displayName : option.name}
            </React.Fragment>
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant={selectedApprole && selectedApprole.name===option.name ? "default":"outlined"}
                color="primary"
                //color={selectedApprole && selectedApprole.name===option.name ? "secondary":"primary"}
                key={option.name} 
                label={option.displayName ? option.displayName:option.name}
                onClick={()=>{                  

                  const filteredAceessPermission = props.itemAccessPermissions.filter(item=>item.account.name===option.name);
                  if(filteredAceessPermission.length===1)
                    setPermissionType(filteredAceessPermission[0].permission.accessPermission.accessLabel);

                  if(filteredAceessPermission.length===1){

                    // if(filteredAceessPermission[0].permission.accessModeList && 
                    //   filteredAceessPermission[0].permission.accessModeList.length>0 && 
                    //   filteredAceessPermission[0].permission.accessModeList[0].accessValue)
                    //   defaultValueCustom = CustomData2.filter(item=>filteredAceessPermission[0].permission.accessModeList.map(obj=>obj.accessValue).indexOf(item.accessValue)!==-1);
                    // else                    
                    //   defaultValueCustom = CustomData2.filter(item=>filteredAceessPermission[0].permission.accessModeList.indexOf(item.accessValue)!==-1);
                    
                    //defaultValueCustom = CustomData2.filter(item=>filteredAceessPermission[0].permission.accessModeList.map(obj=>obj.accessValue).indexOf(item.accessValue)!==-1);
                    //defaultValueCustom = filteredAceessPermission[0].permission.accessModeList;

                    const defaultValueCustom = CustomData2.filter(item=>filteredAceessPermission[0].permission.accessModeList.map(obj=>obj.accessValue).indexOf(item.accessValue)!==-1);

                    setCustomPermissionType(defaultValueCustom);
                  }

                  if(selectedApprole && selectedApprole.name===option.name)
                    setSelectedApprole(null);
                  else  
                    setSelectedApprole(option);
                }}
                onDelete={() => console.log("test")}
                {...getTagProps({ index })}
              />
            ))
          }
        />   

        </Grid>
        
        {actionType==='add' && 
        <Grid item xs={12} md={12}>
        {/* <FormControl variant="outlined" fullWidth className={classes.formControl}>         */}
        {/* <InputLabel id="demo-simple-select-outlined-label">{getText('Permission')}</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={permissionType}
          MenuProps={MenuProps}    
          disabled={selectedApprole===null}   
          variant="outlined" 
          fullWidth
          onChange={(e)=>{

            props.itemAccessPermissions.forEach((item,index)=>{
              if(selectedApprole && item.account.name===selectedApprole.name)
              {
                switch(e.target.value){
                  case "FULL CONTROL":
                    props.itemAccessPermissions[index].permission = 
                      {
                        accessModeList: [ 
                            {accessValue:2,accessLabel:"TRAVERSE"},
                            {accessValue:1,accessLabel:"READ"},
                            {accessValue:4,accessLabel:"WRITE"},
                            {accessValue:8,accessLabel:"DELETE"},
                            {accessValue:16,accessLabel:"ASSIGN PERMISSION"},
                            {accessValue:32,accessLabel:"SET OWNERSHIP"},
                            {accessValue:2048,accessLabel:"RUNREPORT"},
                            {accessValue:4096,accessLabel:"SCHEDULE PUBLISHER REPORT"},
                            {accessValue:8192,accessLabel:"VIEW PUBLISHER OUTPUT"}
                          ],
                        accessPermission: {
                          accessValue: 65535,
                          accessLabel: e.target.value
                        }
                      }
                    break;
                  case "MODIFY":
                    props.itemAccessPermissions[index].permission = 
                      {
                        accessModeList: [ 
                            {accessValue:2,accessLabel:"TRAVERSE"},
                            {accessValue:1,accessLabel:"READ"},
                            {accessValue:4,accessLabel:"WRITE"},
                            {accessValue:8,accessLabel:"DELETE"}
                        ],
                        accessPermission: {
                          accessValue: 15,
                          accessLabel: e.target.value
                        }
                      }
                    break;
                  case "OPEN":
                    props.itemAccessPermissions[index].permission = 
                      {
                          accessModeList: [ 
                            {accessValue:2,accessLabel:"TRAVERSE"},
                            {accessValue:1,accessLabel:"READ"}
                          ],
                          accessPermission: {
                            accessValue: 3,
                            accessLabel: e.target.value
                          }
                      }
                    break;
                  case "EXECUTE":
                    props.itemAccessPermissions[index].permission = 
                      {
                          accessModeList: [ 
                            {accessValue:1,accessLabel:"READ"},
                            {accessValue:2,accessLabel:"TRAVERSE"},
                            {accessValue:2048,accessLabel:"RUNREPORT"}
                          ],
                          accessPermission: {
                          accessValue: 2051,
                          accessLabel: e.target.value
                        }
                      }
                    break;
                  case "NO ACCESS":
                    props.itemAccessPermissions[index].permission = 
                      {
                          accessModeList: [{accessValue:0,accessLabel:"NO ACCESS"}],
                          accessPermission: {
                          accessValue: 0,
                          accessLabel: e.target.value
                        }
                      }
                    break;
                  case "CUSTOM":
                    //props.itemAccessPermissions[index].permission.accessPermission.accessLabel = e.target.value;
                    //props.itemAccessPermissions[index].permission.accessPermission.accessValue = item.permission.accessModeList.reduce((acc,item)=>acc+item.accessValue,0);

                    break;
                  default:
                    break;
                }
              }});

              const filteredAceessPermission = props.itemAccessPermissions.filter(item=>selectedApprole && item.account.name===selectedApprole.name);
                           
              if(filteredAceessPermission.length===1){
                //const defaultValueCustom=intersectionCustom(CustomData2,filteredAceessPermission[0].permission.accessModeList.map(obj=>obj.accessValue));
                //const defaultValueCustom=filteredAceessPermission[0].permission.accessModeList;//.map(obj=>obj.accessLabel);
                
                const defaultValueCustom = CustomData2.filter(item=>filteredAceessPermission[0].permission.accessModeList.map(obj=>obj.accessValue).indexOf(item.accessValue)!==-1);
                //const defaultValueCustom = intersection(CustomData,filteredAceessPermission[0].permission.accessModeList);

                setCustomPermissionType(defaultValueCustom);
              }

              setPermissionType(e.target.value);              
          }}
          label={getText('Permission')}
        >
          <MenuItem key="Full Control" value="FULL CONTROL">Full Control</MenuItem>
          <MenuItem key="MODIFY" value="MODIFY">Modify</MenuItem>
          <MenuItem key="Open" value="OPEN">Open</MenuItem>
          <MenuItem key="EXECUTE" value="EXECUTE">Execute</MenuItem>          
          <MenuItem key="No Access" value="NO ACCESS">No Access</MenuItem>        
          <MenuItem key="CUSTOM" value="CUSTOM">Custom</MenuItem>                
        </Select>
        </Grid>
        }

        {actionType==='add' && 
        <Grid item xs={12} md={12}>
        <Autocomplete
          multiple
          limitTags={3}
          id="combo-box-custom-list"
          options={CustomData2}
          disabled={selectedApprole===null}
          disableClearable={permissionType!=='CUSTOM'}
          disableCloseOnSelect
          getOptionLabel={(option) => option.accessLabel}
          fullWidth
          //getOptionDisabled={(option) => customPermissionType.filter(item=>item.accessLabel==='NO ACCESS').length===1 ? option.accessLabel==='CUSTOM' : true }
          value={customPermissionType}
          onChange={(e,customValue)=>{

            if(permissionType!=='CUSTOM')
              return;

            const newData = new Set(customValue);

            const newDataArr = [...newData];

            if(newDataArr.filter(item=>item.accessLabel==='NO ACCESS').length===1 && newDataArr.length>1){
              return;
            }


            props.itemAccessPermissions.forEach((item,index)=>{
              if(selectedApprole && item.account.name===selectedApprole.name)
              {
                props.itemAccessPermissions[index].permission.accessModeList = newDataArr;
                props.itemAccessPermissions[index].permission.accessPermission.accessValue = item.permission.accessModeList.reduce((acc,item)=>acc+item.accessValue,0);
                props.itemAccessPermissions[index].permission.accessPermission.accessLabel = 'CUSTOM';

                setCustomPermissionType(props.itemAccessPermissions[index].permission.accessModeList);
              }
            });

 
          }}
          renderInput={(params) => <TextField {...params} label="custom" variant="outlined" />}
          renderOption={(option, { selected }) =>  (
            <React.Fragment>
              <Checkbox
                checked={selected}
              />
              {option.accessLabel}
            </React.Fragment>
          )}
          //filterOptions={filterOptions}
        />   
        </Grid>
        }
      </Grid>
      </Box>
      </ObieeDialog>
      );
}
