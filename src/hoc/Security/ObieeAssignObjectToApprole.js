import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {UserContext} from '../../Context';
import {appRoleAll} from '../../webservice/Approle';
import {tree,permissionFull,
        permissionNoAccess,permissionModify,permissionOpen,
        //permissionViewReportOutput,permissionScheduleReport,
        permissionCustom,getItemPermission} from '../../webservice/Catalog';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ObieeMaterialTable from '../../widgets/ObieeMaterialTable';
import {getText} from '../../utils/Utils';
import Refresh from '@material-ui/icons/Refresh';
// import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
//import Select from '@material-ui/core/Select';
//import Child from '@material-ui/icons/ChildCare';
//import MenuItem from '@material-ui/core/MenuItem';
//import db from './catalog.json';
//import FormControl from '@material-ui/core/FormControl';
//import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';
//import Input from '@material-ui/core/Input';
//import ObieeButtonOperation from '../../widgets/ObieeButtonOperation';
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';
import ObieePermissionDialog from '../../widgets/ObieePermissionDialog';

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

const CUSTOM_TYPE = [
  {id:0,desc:"EXECUTE"},
  {id:1,desc:"READ"},
  {id:2,desc:"TRAVERSE"},
  {id:4,desc:"WRITE"},
  {id:8,desc:"DELETE"},
  {id:32,desc:"SET OWNERSHIP"},
  {id:2048,desc:"RUN PUBLISHER REPORT"},
  {id:2051,desc:"OPEN"},
  {id:4096,desc:"SCHEDULE PUBLISHER REPORT"},
  {id:8192,desc:"VIEW PUBLISHER OUTPUT"},
];

export default function ObieeAssignObjectToApprole() {

  const classes = useStyles();

  const [approles,setApproles] = React.useState([]);
  const [selectedApprole,setSelectedApprole] = React.useState();
  const [catalog,setCatalog] = React.useState([]);
  const [rowExpanded,setRowExpanded] = React.useState(null);

  //const [permissionType,setPermissionType] = React.useState('Form Control');
  //const [customPermissionType,setCustomPermissionType] = React.useState([]);

  const [openPermissionDialog,setOpenPermissionDialog] = React.useState({open:false,permissionType:'Form Control',customPermissionType:[]});

  
  const [paths,setPaths] = React.useState([]);

  const context = React.useContext(UserContext);

  //const strPermission = getText('Permission');

  React.useEffect(()=>{

    async function fetchData(){

      context.obieeDispatch({type:'show_loading'});

      //------------------------------------------------------

      let result = await appRoleAll();

      if(result.error){
        context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
      }
      else{
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


  async function handleAddPermission(permissionType,customPermissionType){

    if(paths.length === 0 || selectedApprole.length===0){
      context.obieeDispatch({type:'show_message',messageToShow:{type:'warning',message:getText('Fill Inputs')}});
      return;
    }

    let result;
    const user = localStorage.getItem('user');

    let data =
    {
      user:user,
      paths: paths.map(item=>item.path),
      isRecursive: true,
      itemAccessPermissions: [
          {
              account: {
                  name: selectedApprole
              }
          },
          {
              account: {
                  name: "BIServiceAdministrator"
              }
          }
      ]
    }

    switch(permissionType){
      case 'Full Control':

        result = await permissionFull(data);
        break;
      case 'Modify':
        result = await permissionModify(data);
        break;
      case 'Open':
        result = await permissionOpen(data);
        break;
      case 'No Access':
        result = await permissionNoAccess(data);
        break;
      case 'Custom':
        const customPermissionTypeValues = customPermissionType.map(item=>{
          return CUSTOM_TYPE.filter(obj=>obj.desc===item)[0].id
        });

        const sumValues = customPermissionTypeValues.reduce((item,acc)=>acc+item,0)

        data={
          user:user,
          //sessionId":"5454",
          paths: paths.map(item=>item.path),
          isRecursive: true,
          itemAccessPermissions: [
              {
                  account: {
                      name: selectedApprole
                  },
                  permission: {
                      "accessModeList": customPermissionTypeValues,
                      "accessPermission": sumValues
                  }
              },
              {
                  account: {
                      "name": "BIServiceAdministrator"
                  },
                  permission: {
                      accessModeList: customPermissionTypeValues,
                      accessPermission: sumValues
                  }
              }
          ]
          }
          result = await permissionCustom(data);
        break;              
      
      default:

    }

    if(result.error){
      context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
    }
    else{
      context.obieeDispatch({type:'show_message',messageToShow:{type:'info',message:getText('Operation Successful')}});                    
    }

  }

  async function handleRemovePermission(permissionType,customPermissionType){

    if(paths.length === 0 || selectedApprole.length===0){
      context.obieeDispatch({type:'show_message',messageToShow:{type:'warning',message:getText('Fill Inputs')}});
      return;
    }

    let result;
    const user = localStorage.getItem('user');

    let data =
    {
      user:user,
      paths: paths.map(item=>item.path),
      isRecursive: true,
      itemAccessPermissions: [
          {
              account: {
                  name: selectedApprole
              }
          },
          {
              account: {
                  name: "BIServiceAdministrator"
              }
          }
      ]
    }

    switch(permissionType){
      case 'Full Control':

        result = await permissionFull(data);
        break;
      case 'Modify':
        result = await permissionModify(data);
        break;
      case 'Open':
        result = await permissionOpen(data);
        break;
      case 'No Access':
        result = await permissionNoAccess(data);
        break;
      case 'Custom':
        const customPermissionTypeValues = customPermissionType.map(item=>{
          return CUSTOM_TYPE.filter(obj=>obj.desc===item)[0].id
        });

        const sumValues = customPermissionTypeValues.reduce((item,acc)=>acc+item,0)

        data={
          user:user,
          //sessionId":"5454",
          paths: paths.map(item=>item.path),
          isRecursive: true,
          itemAccessPermissions: [
              {
                  account: {
                      name: selectedApprole
                  },
                  permission: {
                      "accessModeList": customPermissionTypeValues,
                      "accessPermission": sumValues
                  }
              },
              {
                  account: {
                      "name": "BIServiceAdministrator"
                  },
                  permission: {
                      accessModeList: customPermissionTypeValues,
                      accessPermission: sumValues
                  }
              }
          ]
          }
          result = await permissionCustom(data);
        break;              
      
      default:

    }

    if(result.error){
      context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
    }
    else{
      context.obieeDispatch({type:'show_message',messageToShow:{type:'info',message:getText('Operation Successful')}});                    
    }

  }

  function handleDelete(itemToDelete){
    const newList = [...paths];
    const currentIndex = newList.indexOf(itemToDelete);

    if(currentIndex !== -1){
      newList.splice(currentIndex,1);
      setPaths(newList);
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
          onChange={async (event,val)=>{
            setSelectedApprole(val.name);
          }}
        />        
        </Grid>

        <Grid item xs={12} md={12}>
        <Grid 
          spacing={0} 
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"        
        >
          <Grid item xs={12} md={12}>
          </Grid>

          <Grid item xs={12} md={12}>
          <Grid item xs={12} md={12}>
            <Checkbox />{getText('Select All')}
            <Paper style={{"height":"50px"}}>
              {
                paths && paths.map(item=>(
                  <Chip
                  label={item.description ? item.description : item.caption}
                  onDelete={()=>{handleDelete(item);}}
                  deleteIcon={<CloseIcon />}
                  color="primary"
                  onClick={async ()=>{    
                    context.obieeDispatch({type:'show_loading'});

                    const user = localStorage.getItem('user');              
                    const sessionId = localStorage.getItem('sessionId');

                    const data = {
                      user: user,
                      sessonId:sessionId,
                      path: item.path,
                      account :"BIServiceAdministrator"
                    }
                                  
                    const result = await getItemPermission(data);
              
                    if(result.error){
                      context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
                    }
                    else{
                      console.log("getItemPermission",result.data);
                      setOpenPermissionDialog(
                        { open:true,
                          permissionType:result.data[0].permission.accessPermission.acessLabel,
                          customPermissionType:result.data[0].permission.accessModeList.map(item=>item.acessLabel)
                        }
                      );
                    }
                    

                    context.obieeDispatch({type:'hide_loading'});
                  }}
                />
                ))
              }
            </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12}>
      <ObieeMaterialTable
          columns={[
            { field: 'caption', title: getText('Caption'), headerStyle:{width:200} },
            { field: 'description', title: getText('Description'), headerStyle:{width:300} },
          ]} 
          data={catalog}
          actions={[
          //   rowData => rowExpanded && rowExpanded.path===rowData.parentPath ?
          //   ({
          //     icon: () => (
          //         <Child
          //             color={'enabled'}
          //         />
          //     ),
          //     tooltip: 'Childs',
          //      onClick: (event, rowData) => {
          //          if (!rowData.disabled) {
          //              // do stuff
          //          } else {
          //              return null;
          //          }
          //      },
          // })
          // :null,
          {isFreeAction:true,icon:()=>(<Refresh />),tooltip:'بروزرسانی',onClick:(event,rowData)=>{fetchData()}},
          //{isFreeAction:true,icon:()=>(<Permissions />),tooltip:'بروزرسانی',onClick:(event,rowData)=>{}},
          //{isFreeAction:true,icon:()=>( <ObieeButtonOperation onExecute={()=>handleAddPermission()} title="Set"/>),tooltip:'بروزرسانی',onClick:(event,rowData)=>{}},

          ]}
          options={{
            rowStyle:(event,rowData)=>{                
                if(rowExpanded && rowExpanded.path===event.parentPath)
                    return {
                        backgroundColor:'#70b1f2',
                    }                  
            },
        }}
          parentChildData={(row, rows) => rows.find(a => a.path === row.parentPath)}
          onTreeExpandChange={(event,nodes)=>{
            if(nodes){
                setRowExpanded(event);  
            }
         }}
        onRowClick={(event,rowData)=>{
          const newPaths = [...paths];
          if(newPaths.indexOf(rowData)===-1){
            newPaths.push(rowData);
            setPaths(newPaths);     
            
            context.obieeDispatch({type:'show_message',messageToShow:{type:'info',message:getText('Node Added')+" ["+(rowData.description ? rowData.description : rowData.caption)+" ]"}});
          }
        }
      }
      />
        {openPermissionDialog.open &&
        <ObieePermissionDialog 
        onClose={()=>setOpenPermissionDialog({...openPermissionDialog , open:false})}
        onAddPermission={(permissionType,customPermissionType)=>{console.log('onAddPermission',permissionType,customPermissionType);}}
        onRemovePermission={(permissionType,customPermissionType)=>{console.log('onRemovePermission',permissionType,customPermissionType);}}
        />
        }
      </Grid>

    </Grid>
  );
}
