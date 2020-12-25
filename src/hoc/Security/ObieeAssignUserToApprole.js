import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {UserContext} from '../../Context';
import {
  appRoleAll,
  getListRolesOfRole,approleAssignRoleToRole,approleRemoveRoleFromRole,
  getListGroupsOfRole,approleAssignGroupToRole,approleRemoveGroupFromRole,
  getListUsersOfRole,approleAssignUserToRole,approleDeleteUserFromRole
} from '../../webservice/Approle';
import {getUserAll} from '../../webservice/User';
import {getGroupAll} from '../../webservice/Group';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ObieeButtonOperation from '../../widgets/ObieeButtonOperation';
import {getText} from '../../utils/Utils';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
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
    minWidth: 120,
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function ObieeAssignUserToApprole() {

  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([]); 
  const [right, setRight] = React.useState([]);

  const [approles,setApproles] = React.useState([]);
  const [currentApprole,setCurrentApprole] = React.useState();
  const [currentData,setCurrentData] = React.useState([]);
  const [groups,setGroups] = React.useState([]);
  const [users,setUsers] = React.useState([]);

  const [infoType,setInfoType] = React.useState('approle');

  //const rightChecked = intersection(checked, right);
  //const leftChecked = intersection(checked, left);

  const strSave = getText('Save');

  const context = React.useContext(UserContext);

  async function loadData(type){
    let result = null;
    switch(type){
      case 'approle':
        if(approles.length>0){
          setLeft(approles);
          break;
        }

        result = await appRoleAll();

        if(result.error){
          context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
        }
        else{
          setApproles(result.data);
          setLeft(result.data);
        }        
        break;
      case 'group':
        if(groups.length>0){
          setLeft(groups);
          break;
        }

        result = await getGroupAll();

        if(result.error){
          context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
        }
        else{
          setGroups(result.data);
          setLeft(result.data);
        }        
        break;
      case 'user':
        if(users.length>0){
          setLeft(users);
          break;
        }

        result = await getUserAll();

        if(result.error){
          context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
        }
        else{
          setUsers(result.data);
          setLeft(result.data);
        }        
        break;
      default:
        break;
    }

  }

  async function loadDataByApprole(type,approle){

    let result = null;

    switch(type){
      case 'approle':        
        result = await getListRolesOfRole(approle);
        
        if(result.error){
          setCurrentData([]);
          setRight([]);
          context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
        }
        else{
          if(result.data){
            setCurrentData(result.data);
            setRight(result.data);
          } 
          else{
            setCurrentData([]);
            setRight([]);
            context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:getText('ERROR-204')}});
          }
        }
        break;
      case 'group':
        result = await getListGroupsOfRole(approle);
        if(result.error){
          setCurrentData([]);
          setRight([]);
          context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
        }
        else{
          if(result.data){
            setCurrentData(result.data);
            setRight(result.data);
          }
          else{
            setCurrentData([]);
            setRight([]);
            context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:getText('ERROR-204')}});
          }
        }
        break;
      case 'user':
        result = await getListUsersOfRole(approle);
        if(result.error){
          setCurrentData([]);
          setRight([]);
          context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
        }
        else{
          if(result.data){
            setCurrentData(result.data);
            setRight(result.data);
          }
          else{
            setCurrentData([]);
            setRight([]);
            context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:getText('ERROR-204')}});
          }
        }
        break;
      default:

    }
  }

  React.useEffect(()=>{

    async function fetchData(){

      context.obieeDispatch({type:'show_loading'});

      //------------------------------------------------------

      loadData('approle');
      //loadDataByApprole(infoType,val.name);

      //------------------------------------------------------

      context.obieeDispatch({type:'hide_loading'});

    }

    fetchData();

    }
  ,[]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {    
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    const leftChecked = checked;
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {  
    const rightChecked = checked;
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items,uniqueId,title) => {

    const textVal = React.useRef();
    const [filteredItems,setFilteredItems] = React.useState([]);

    React.useEffect(()=>{
      setFilteredItems(items);
    },[items]);

    const handleSearch = ()=>{
      if(textVal.current.value.length>2){
        const filteredItems = items.filter(item=>item.name.indexOf(textVal.current.value)!==-1);
        setFilteredItems(filteredItems);
      }
    }

    return (
    <Card>
    <Grid container spacing={0}>
      <Grid item xs={12} md={12}>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Grid>

      <TextField
        fullWidth
        variant="outlined"
        inputRef={textVal}
        placeholder={getText('Search')}
        inputProps={{ 'aria-label': 'search' }}    
        onChange={e=>{
          if(e.target.value.length === 0)
            setFilteredItems(items);
        }} 
        onKeyDown={e=>{
          if(e.keyCode===13){
            handleSearch();
          }
        }}
        InputProps={{
          startAdornment: ( 
            <InputAdornment position="start">
              <SearchIcon onClick={handleSearch}/>
            </InputAdornment>
          ),
        }}
      />

      {/* <Grid item xs={10} md={10}>
      <TextField
      fullWidth
      variant="outlined"
      inputRef={textVal}
      placeholder="Search"
      inputProps={{ 'aria-label': 'search' }}    
      onChange={e=>{
        if(e.target.value.length === 0)
          setFilteredItems(items);
      }}  
      />
      </Grid>
      <Grid item xs={2} md={2}>
      <IconButton type="submit" className={classes.iconButton} aria-label="search"
      onClick={()=>{
        if(textVal.current.value.length>2){
          const filteredItems = items.filter(item=>item.name.indexOf(textVal.current.value)!==-1);
          setFilteredItems(filteredItems);
        }
      }}
      >
        <SearchIcon />
      </IconButton>
      </Grid> */}
      </Grid>
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {filteredItems.map((value) => {
          const labelId = `transfer-list-item-${value.name}-label-${uniqueId}`;

          return (
            <ListItem key={labelId} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.displayName} - ${value.name}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
    </Card>
    );
  };

  return (
    <Grid container spacing={4} justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={12} md={10}>
        <Autocomplete
          id="combo-box-demo"
          options={approles}
          getOptionLabel={(option) => option.name+(option.displayName ? ' - '+option.displayName:'')}
          fullWidth
          renderInput={(params) => <TextField {...params} label={getText("Approle Name")} variant="outlined" />}
          onChange={async (e,val)=>{     
            if(val){                                                                                                                                               
              context.obieeDispatch({type:'show_loading'});

              setCurrentApprole(val);
              await loadDataByApprole(infoType,val.name);

              context.obieeDispatch({type:'hide_loading'});          
            }
          }}
        />        
      </Grid>
      <Grid item xs={12} md={2}>
      {/* <FormControl variant="outlined" className={classes.formControl}> */}
        {/* <InputLabel id="demo-simple-select-label">{getText('Show By')}</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            value={infoType}
            label={getText('Show By')}
            onChange={async (event)=>{

              if(!currentApprole){
                context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:getText('Fill Inputs')+" . "+getText('Approle Name')}});
                return;
              }
              setInfoType(event.target.value);

              context.obieeDispatch({type:'show_loading'});

              switch(event.target.value){
                case "approle":
                  await loadData('approle');
                  await loadDataByApprole('approle',currentApprole.name);
                  break;
                case "group":
                  await loadData('group');
                  await loadDataByApprole('group',currentApprole.name);                  
                  break;
                case "user":  
                  await loadData('user');
                  await loadDataByApprole('user',currentApprole.name);
                  break;
                default:
                  break;
              }

              context.obieeDispatch({type:'hide_loading'});          

            }}
          >
            <MenuItem value={'approle'}>{getText('Approle')}</MenuItem>
            <MenuItem value={'group'}>{getText('Group')}</MenuItem>
            <MenuItem value={'user'}>{getText('User')}</MenuItem>
          </Select>
        {/* </FormControl>     */}
      </Grid>
      <Grid item xs={12} md={5}>{customList(left,1000000,getText('Allocatable'))}</Grid>
      <Grid item xs={12} md={2}>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            // disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            // disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5}>{customList(right,2000000,getText('Allocated'))}</Grid>

      <Grid
        container
        item
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
      >

          <ObieeButtonOperation  type='button' onExecute={async ()=>
            {

              const listRemove =  not(currentData,right);
              const listAdd = not(right,currentData);

              if((listRemove.length === 0 && listAdd.length===0) || currentApprole.length===0){
                context.obieeDispatch({type:'show_message',messageToShow:{type:'warning',message:getText('Fill Inputs')}});
                return;
              }

              context.obieeDispatch({type:'show_loading'});
              
             
              async function addToList(){
                let flag = true;
                await listAdd.forEach(async (item)=>{

                  let result = null;

                  switch(infoType){
                    case 'approle':
                      result = await approleAssignRoleToRole(currentApprole.name,item.name);
                      break;
                    case 'group':
                      result = await approleAssignGroupToRole(
                        {
                          appStripId:"obi",
                          group:item.name,
                          applicationRole:currentApprole.name                        
                        }   
                        );
                      break;
                    case 'user':
                      result = await approleAssignUserToRole(currentApprole.name,item.name);
                      break;
                    default:  
                      break;
                  }

                  if(result.error){
                    context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin+(result.error.errorMessage ? ". "+result.error.errorMessage : "")}});
                    flag = false; 
                  }

                });

                return flag;
              }

              let error = await addToList();

                if(!error){
                  context.obieeDispatch({type:'hide_loading'});
                  return;
                }

              async function removeFromList(){
                let flag = true;
                await listRemove.forEach(async (item)=>{

                  let result = null;

                  switch(infoType){
                    case 'approle':
                      result = await approleRemoveRoleFromRole(currentApprole.name,item.name);
                      break;
                    case 'group':                    
                      result = await approleRemoveGroupFromRole(
                        {
                          appStripId:"obi",
                          group:item.name,
                          applicationRole:currentApprole.name                        
                        }   
                        );
                      break;
                    case 'user':
                      result = await approleDeleteUserFromRole(currentApprole.name,item.name);
                      break;
                    default:  
                      break;
                  }
                  
                  if(result.error){                
                    context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin+(result.error.errorMessage ? ". "+result.error.errorMessage : "")}});            
                    flag = false;    
                  }

                });

                return flag;
              }

              error = await removeFromList();

              if(!error){
                context.obieeDispatch({type:'hide_loading'});
                return;
              }
              
              context.obieeDispatch({type:'show_message',messageToShow:{type:'info',message:getText('Operation Successful')}});                    
              context.obieeDispatch({type:'hide_loading'});

            }} title={strSave} />
      </Grid>
    </Grid>
  );
}
