import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {UserContext} from '../../Context';
import {appRoleAll,getListUsersOfRole} from '../../webservice/Approle';
import {tree,permissionFull,
        permissionNoAccess,permissionModify,permissionOpen,
        permissionViewReportOutput,permissionScheduleReport,permissionCustom} from '../../webservice/Catalog';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ObieeMaterialTable from '../../widgets/ObieeMaterialTable';
import {getText} from '../../utils/Utils';
// import Refresh from '@material-ui/icons/Refresh';
// import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
import Select from '@material-ui/core/Select';
import Child from '@material-ui/icons/ChildCare';
import MenuItem from '@material-ui/core/MenuItem';
//import db from './catalog.json';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
// import Paper from '@material-ui/core/Paper';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import ObieeButtonOperation from '../../widgets/ObieeButtonOperation';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    margin: 'auto',
  },
  paper: {
    width: '100%',
    height: 300,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    maxWidth: 300,
  }
}));

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

export default function ObieeAssignObjectToApprole() {

  const classes = useStyles();

  const [approles,setApproles] = React.useState([]);
  const [catalog,setCatalog] = React.useState([]);
  const [rowExpanded,setRowExpanded] = React.useState(null);
  const [permissionType,setPermissionType] = React.useState('Form Control');
  const [customPermissionType,setCustomPermissionType] = React.useState([]);

  const context = React.useContext(UserContext);

  const strPermission = getText('Permission');

  React.useEffect(()=>{

    async function fetchData(){

      context.obieeDispatch({type:'show_loading'});

      //------------------------------------------------------

      let result = await appRoleAll();

      if(result.error){
        context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
      }
      else{
        console.log('result.data',result.data);
        setApproles(result.data);
      }

      //------------------------------------------------------

      const user = localStorage.getItem('user');
      const sessionId = localStorage.getItem('sessionId');

      result = await tree(
        {
        user: user,
        sessionId:sessionId
        }
      );

      if(result.error){
        context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
      }
      else{
        setCatalog(result.data);
      }

      //------------------------------------------------------

      context.obieeDispatch({type:'hide_loading'});

    }

    fetchData();

    }
  ,[]);

  const Permissions = ()=>{
    return (
      <Grid container spacing={1} justify="center" alignItems="center" >
      <Grid item xs={6} md={6}>
      <FormControl variant="outlined" fullWidth className={classes.formControl}>        
      <InputLabel id="demo-simple-select-outlined-label">{strPermission}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={permissionType}
        MenuProps={MenuProps}        
        onChange={(e)=>{
          setPermissionType(e.target.value);
        }}        
        label={strPermission}
      >
        <MenuItem key="Full Control" value="Full Control">Full Control</MenuItem>
        <MenuItem key="Modify" value="Modify">Modify</MenuItem>
        <MenuItem key="Open" value="Open">Open</MenuItem>
        <MenuItem key="No Access" value="No Access">No Access</MenuItem>        
        <MenuItem key="Custom" value="Custom">Custom</MenuItem>                
      </Select>
    </FormControl>
      </Grid>
      <Grid item xs={6} md={6}>  
    {permissionType==='Custom' && 
    <FormControl variant="outlined" fullWidth className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Custom Options </InputLabel>
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
          <MenuItem key={"Read"} value={"Read"}>
            <Checkbox checked={customPermissionType.indexOf("Read")!==-1} />
            <ListItemText primary={"Read"} />
          </MenuItem>

          <MenuItem key={"Exceute"} value={"Exceute"}>
            <Checkbox checked={customPermissionType.indexOf("Exceute")!==-1} />
            <ListItemText primary={"Exceute"} />
          </MenuItem>

          <MenuItem key={"Write"} value={"Write"}>
            <Checkbox checked={customPermissionType.indexOf("Write")!==-1} />
            <ListItemText primary={"Write"} />
          </MenuItem>

          <MenuItem key={"Delete"} value={"Delete"}>
            <Checkbox checked={customPermissionType.indexOf("Delete")!==-1} />
            <ListItemText primary={"Delete"} />
          </MenuItem>

          <MenuItem key={"Change Permissions"} value={"Change Permissions"}>
            <Checkbox checked={customPermissionType.indexOf("Change Permissions")!==-1} />
            <ListItemText primary={"Change Permissions"} />
          </MenuItem>

          <MenuItem key={"Set Ownership"} value={"Set Ownership"}>
            <Checkbox checked={customPermissionType.indexOf("Set Ownership")!==-1} />
            <ListItemText primary={"Set Ownership"} />
          </MenuItem>

          <MenuItem key={"Run publisher Report"} value={"Run publisher Report"}>
            <Checkbox checked={customPermissionType.indexOf("Run publisher Report")!==-1} />
            <ListItemText primary={"Run publisher Report"} />
          </MenuItem>

          <MenuItem key={"Schedule Publisher Report"} value={"Schedule Publisher Report"}>
            <Checkbox checked={customPermissionType.indexOf("Schedule Publisher Report")!==-1} />
            <ListItemText primary={"Schedule Publisher Report"} />
          </MenuItem>

          <MenuItem key={"View Publisher Output"} value={"View Publisher Output"}>
            <Checkbox checked={customPermissionType.indexOf("View Publisher Output")!==-1} />
            <ListItemText primary={"View Publisher Output"} />
          </MenuItem>

        </Select>
      </FormControl>
    }
    </Grid>
    </Grid>
    )
  }

  async function handleExecute(){

    let result;

    // permissionViewReportOutput,permissionScheduleReport,permissionCustom

    switch(permissionType){
      case 'Full Control':
        result = await permissionFull();
        break;
      case 'Modify':
        result = await permissionModify();
        break;
      case 'Open':
        result = await permissionOpen();
        break;
      case 'No Access':
        result = await permissionNoAccess();
        break;
      case 'Custom':
        break;              
    }

    if(result.error){
      context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
    }
    else{
      context.obieeDispatch({type:'show_message',messageToShow:{type:'info',message:getText('Operation Successful')}});                    
    }

  }


  return (
    <Grid container spacing={1} justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={12} md={12}>
        <Autocomplete
          id="combo-box-demo"
          options={approles}
          getOptionLabel={(option) => option.name+(option.displayName ? ' - '+option.displayName:'')}
          fullWidth
          renderInput={(params) => <TextField {...params} label="approles" variant="outlined" />}
          onChange={async (e,val)=>{
            const result = await getListUsersOfRole(val.name);
            if(result.error){
              context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
            }
            else{
              console.log('setUserOfApproles',result.data);
              setRight(result.data);
            }
          }}
        />        
        </Grid>

      <Grid item xs={12} md={12}>
      <ObieeMaterialTable
          columns={[
            { field: 'caption', title: getText('Caption'), headerStyle:{width:200} },
            { field: 'description', title: getText('Description'), headerStyle:{width:300} },
          ]} 
          data={catalog}
          actions={[
            rowData => rowExpanded && rowExpanded.path===rowData.parentPath ?
            ({
              icon: () => (
                  <Child
                      color={'enabled'}
                  />
              ),
              tooltip: 'Childs',
               onClick: (event, rowData) => {
                   if (!rowData.disabled) {
                       // do stuff
                   } else {
                       return null;
                   }
               },
          })
          :null,
          //{isFreeAction:true,icon:()=>(<Refresh />),tooltip:'بروزرسانی',onClick:(event,rowData)=>{fetchData()}},
          {isFreeAction:true,icon:()=>(<Permissions />),tooltip:'بروزرسانی',onClick:(event,rowData)=>{}},
          {isFreeAction:true,icon:()=>( <ObieeButtonOperation onExecute={()=>handleExecute} title="Set"/>),tooltip:'بروزرسانی',onClick:(event,rowData)=>{}},

          ]}
          options={{
            rowStyle:(event,rowData)=>{                
                if(rowExpanded && rowExpanded.path===event.parentPath)
                    return {
                        backgroundColor:'#70b1f2',
                    }                  
            },
            // cellStyle:(event,rowData)=>{
            //     return (
            //         event===rowData.description && rowData.type==='PROD'  ? COLORS.prod :
            //         event===rowData.description && rowData.type==='HR' ? COLORS.hr :
            //         event===rowData.description && rowData.type==='ASSETINLOCATION' ? COLORS.assetinlocation : COLORS.other
            //     )                        
            // }
        }}
          parentChildData={(row, rows) => rows.find(a => a.path === row.parentPath)}
          onTreeExpandChange={(event,nodes)=>{
            //console.log('onTreeExpandChange',event,nodes)
            if(nodes){
                setRowExpanded(event);        
            }
        }}
        onRowClick={(event,rowData)=>console.log(rowData)}
      />
      </Grid>

      {/* <Grid item xs={12} md={2}>
        <Grid 
          spacing={0} 
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"        
        >
          <Grid item xs={12} md={12}>
            <Permissions />
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper style={{"height":"400px"}}>

            </Paper>
          </Grid>
        </Grid>
      </Grid> */}

    </Grid>
  );
}
