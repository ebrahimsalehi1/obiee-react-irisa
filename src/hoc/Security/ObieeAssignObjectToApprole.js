import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {UserContext} from '../../Context';
import {appRoleAll,getListUsersOfRole} from '../../webservice/Approle';
import {tree} from '../../webservice/Catalog';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ObieeMaterialTable from '../../widgets/ObieeMaterialTable';
import {getText} from '../../utils/Utils';
import Refresh from '@material-ui/icons/Refresh';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Select from '@material-ui/core/Select';
import Child from '@material-ui/icons/ChildCare';
import MenuItem from '@material-ui/core/MenuItem';
//import db from './catalog.json';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';

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
}));

export default function ObieeAssignObjectToApprole() {

  const classes = useStyles();

  const [approles,setApproles] = React.useState([]);
  const [catalog,setCatalog] = React.useState([]);
  const [rowExpanded,setRowExpanded] = React.useState(null);
  const [permissionType,setPermissionType] = React.useState('Full control');

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
      <FormControl variant="outlined" fullWidth className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{strPermission}</InputLabel>
      <Select
        //labelId="demo-simple-select-outlined-label"
        //id="demo-simple-select-outlined"
        value={permissionType}
        onChange={(e)=>{
          console.log(e.target.value);
          setPermissionType(e.target.value);
        }}
        label={strPermission}
      >
        <List component="nav"
        subheader={<ListSubheader component="div">Permissions</ListSubheader>}
        >
          <ListItem button>
            <ListItemText>Full control</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Modify</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Open</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>No Access</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Custom</ListItemText>
            <Checkbox />
            <Checkbox />

          </ListItem>
          <ListItem>
          <Checkbox />
          </ListItem>

          <ListItem>
          <Checkbox />
          </ListItem>

          <ListItem>
          <Checkbox />
          </ListItem>
          
        </List>
      </Select>
    </FormControl>
    )
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

      <Grid item xs={12} md={10}>
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
          {isFreeAction:true,icon:()=>(<Refresh />),tooltip:'بروزرسانی',onClick:(event,rowData)=>{fetchData()}},
          {isFreeAction:true,icon:()=>(<TextField />),tooltip:'بروزرسانی',onClick:(event,rowData)=>{fetchData()}},
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
      />
      </Grid>

      <Grid item xs={12} md={2}>
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
      </Grid>

    </Grid>
  );
}
