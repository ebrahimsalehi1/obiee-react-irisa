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


const CustomData = [
  {accessValue:0,acessLabel:"CUSTOM",title:"Custom"},
  {accessValue:1,acessLabel:"READ",title:"Read"},
  {accessValue:2,acessLabel:"TRAVERSE",title:"Traverse"},
  {accessValue:4,acessLabel:"WRITE",title:"Write"},
  {accessValue:8,acessLabel:"DELETE",title:"Delete"},
  {accessValue:32,acessLabel:"SET OWNERSHIP",title:"Set Ownership"},
  {accessValue:2048,acessLabel:"RUNREPORT",title:"Run Report"},
  {accessValue:2051,acessLabel:"OPEN",title:"Open"},
  {accessValue:4096,acessLabel:"SCHEDULE PUBLISHER REPORT",title:"Schedule Publisher Report"},
  {accessValue:8192,acessLabel:"VIEW PUBLISHER OUTPUT",title:"View Publisher Output"},
];

const CustomData2 = [
  {accessValue:0,acessLabel:"CUSTOM"},
  {accessValue:1,acessLabel:"READ"},
  {accessValue:2,acessLabel:"TRAVERSE"},
  {accessValue:4,acessLabel:"WRITE"},
  {accessValue:8,acessLabel:"DELETE"},
  {accessValue:32,acessLabel:"SET OWNERSHIP"},
  {accessValue:2048,acessLabel:"RUNREPORT"},
  {accessValue:2051,acessLabel:"OPEN"},
  {accessValue:4096,acessLabel:"SCHEDULE PUBLISHER REPORT"},
  {accessValue:8192,acessLabel:"VIEW PUBLISHER OUTPUT"},
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

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.acessLabel,
});

export default function ObieePermissionDialog(props){
    const {approles,onClose,onAddPermission,onRemovePermission} = props;  //  props.itemAccessPermissions

    function intersection(a, b) {
      return a.filter((value) => b.indexOf(value.name) !== -1);
    }

    function intersectionCustom(a, b) {
      return a.filter((value) => b.indexOf(value.accessValue) !== -1);
    }

    const [permissionType,setPermissionType] = React.useState('');
    //const [customPermissionType,setCustomPermissionType] = React.useState(props.customPermissionType ? props.customPermissionType : []);    
    const [selectedApprole,setSelectedApprole] = React.useState(null);
    const [flag,setFlag] = React.useState(false);

    const classes = useStyles();
    const filteredAceessPermission = props.itemAccessPermissions.filter(item=>selectedApprole && item.account.name===selectedApprole.name);
    let defaultValueCustom = [];
    if(filteredAceessPermission.length===1){
      defaultValueCustom=intersectionCustom(CustomData2,filteredAceessPermission[0].permission.accessModeList.map(obj=>obj.accessValue));
      console.log(filteredAceessPermission[0].permission.accessModeList);
    }
    console.log('ObieePermissionDialog is rendering',props.itemAccessPermissions);

    return (
        <ObieeDialog 
        title={getText("Permission Dialog")}
        openModal={true}
        //TransitionComponent
        eventClose={onClose}
        actionBar={
        <>
        <ObieeButtonOperation className={classes.button} onExecute={()=>onAddPermission(props.itemAccessPermissions)} title={getText("Add")}/>
        <ObieeButtonOperation className={classes.button} onExecute={()=>onRemovePermission(props.itemAccessPermissions)} title={getText("Delete")}/>
        <ObieeButtonOperation className={classes.button} onExecute={onClose} title={getText("Cancel")}/>
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
                        acessLabel: ""
                      }
                  }
                }
              );
            });

            //const removeFromAccessPermissions = props.itemAccessPermissions.filter(item=>newDataArr.map(obj=>obj.name).indexOf(item.account.name)===-1);
            //console.log('removeFromAccessPermissions',removeFromAccessPermissions);
            //setFlag(!flag);
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
                label={option.name}
                onClick={()=>{
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

        <Grid item xs={12} md={12}>
        {/* <FormControl variant="outlined" fullWidth className={classes.formControl}>         */}
        {/* <InputLabel id="demo-simple-select-outlined-label">{getText('Permission')}</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filteredAceessPermission.length===1 && filteredAceessPermission[0].permission.accessPermission.acessLabel}
          MenuProps={MenuProps}    
          disabled={selectedApprole===null}   
          variant="outlined" 
          fullWidth
          onChange={(e)=>{
            setPermissionType(e.target.value);
            //alert(e.target.value)

            props.itemAccessPermissions.forEach((item,index)=>{
              if(selectedApprole && item.account.name===selectedApprole.name)
              {
               
                //props.itemAccessPermissions[index].permission.accessPermission.acessLabel = e.target.value;

                switch(e.target.value){
                  case "FULL CONTROL":
                    props.itemAccessPermissions[index].permission = 
                      {
                        accessModeList: [ 
                            2,
                            1,
                            4,
                            8,
                            16,
                            32,
                            2048,
                            4096,
                            8192
                          ],
                        accessPermission: {
                          accessValue: 65535,
                          acessLabel: e.target.value
                        }
                      }
                    break;
                  case "MODIFY":
                    props.itemAccessPermissions[index].permission = 
                      {
                        accessModeList: [ 
                            2,
                            1,
                            4,
                            8
                        ],
                        accessPermission: {
                          accessValue: 15,
                          acessLabel: e.target.value
                        }
                      }
                    break;
                  case "OPEN":
                    props.itemAccessPermissions[index].permission = 
                      {
                          accessModeList: [ 
                              2,
                              1
                          ],
                          accessPermission: {
                          accessValue: 3,
                          acessLabel: e.target.value
                        }
                      }
                    break;
                  case "EXECUTE":
                    props.itemAccessPermissions[index].permission = 
                      {
                          accessModeList: [ 
                              2,
                              1,
                              2048
                          ],
                          accessPermission: {
                          accessValue: 2051,
                          acessLabel: e.target.value
                        }
                      }
                    break;
                  case "NO ACCESS":
                    props.itemAccessPermissions[index].permission = 
                      {
                          accessModeList: [0],
                          accessPermission: {
                          accessValue: 0,
                          acessLabel: e.target.value
                        }
                      }
                    break;
                  case "CUSTOM":
                    //props.itemAccessPermissions[index].permission.accessPermission.acessLabel = e.target.value;
                    //props.itemAccessPermissions[index].permission.accessPermission.accessValue = item.permission.accessModeList.reduce((acc,item)=>acc+item.accessValue,0);

                    break;
                  default:
                    break;
                }
              }});

            console.log('onChange - type',e.target.value,props.itemAccessPermissions);
            setFlag(!flag)
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

        <Grid item xs={12} md={12}>
        <Autocomplete
          multiple
          limitTags={3}
          id="combo-box-custom-list"
          options={CustomData2}
          disabled={selectedApprole===null || permissionType!=='CUSTOM'}
          disableCloseOnSelect
          getOptionLabel={(option) => option.acessLabel}
          fullWidth
          defaultValue={defaultValueCustom}
          onChange={(e,customValue)=>{

            const newData = new Set(customValue);
            // approle.forEach(item=>{
            //   newData.add(item);
            // })

            const newDataArr = [...newData];
            //const addToAccessPermissions = newDataArr.filter(item=>props.itemAccessPermissions.map(obj=>obj.account.name).indexOf(item.name)===-1);
            //console.log('addToAccessPermissions',addToAccessPermissions);

            props.itemAccessPermissions.forEach((item,index)=>{
              if(selectedApprole && item.account.name===selectedApprole.name)
              {
                props.itemAccessPermissions[index].permission.accessModeList = newDataArr;
                props.itemAccessPermissions[index].permission.accessPermission.accessValue = item.permission.accessModeList.reduce((acc,item)=>acc+item.accessValue,0);
              }
            });

            console.log('onChange',props.itemAccessPermissions);

          }}
          renderInput={(params) => <TextField {...params} label="custom" variant="outlined" />}
          renderOption={(option, { selected }) =>  (
            <React.Fragment>
              <Checkbox
                checked={selected}
              />
              {option.acessLabel}
            </React.Fragment>
          )}
          //filterOptions={filterOptions}
        />   
        </Grid>
      </Grid>
      </Box>
      </ObieeDialog>
      );
}
