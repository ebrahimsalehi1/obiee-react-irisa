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
import data from '../../../db.json';
import {UserContext} from '../../Context';
import {appRoleAll,getListUsersOfRole} from '../../webservice/Approle';
import {getUserAll} from '../../webservice/User';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ObieeButtonOperation from '../../widgets/ObieeButtonOperation';
import {getText} from '../../utils/Utils';

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
  const [left, setLeft] = React.useState([]); // data.users
  const [right, setRight] = React.useState([]);
  //data.userApproles.map(item=>{
  //    return {id:item.id,name:item.name,family:item.family}
  //}));
  const [approles,setApproles] = React.useState([]);
  const [currentApprole,setCurrentApprole] = React.useState();
  const [currentUsers,setCurrentUsers] = React.useState([]);

  //const rightChecked = intersection(checked, right);
  //const leftChecked = intersection(checked, left);

  const strSave = getText('Save');

  const context = React.useContext(UserContext);

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

      result = await getUserAll();

      if(result.error){
        context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
      }
      else{
        setLeft(result.data);
        //alert('finidhed')
      }

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

    console.log('handleToggle',currentIndex,newChecked);

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
    console.log(leftChecked,right);
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

  const customList = (items,uniqueId) => {

    const textVal = React.useRef();
    const [filteredItems,setFilteredItems] = React.useState([]);

    React.useEffect(()=>{
      setFilteredItems(items);
    },[items]);

    return (
    <Card>
    <Grid container spacing={0}>
      <Grid item xs={10} md={10}>
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
      </Grid>
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

  // console.log('UserOfApprole',
  //   checked.length === 0,
  //   leftChecked.length === 0,
  //   rightChecked.length === 0);

  return (
    <Grid container spacing={4} justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={12} md={12}>
        <Autocomplete
          id="combo-box-demo"
          options={approles}
          getOptionLabel={(option) => option.name+(option.displayName ? ' - '+option.displayName:'')}
          fullWidth
          renderInput={(params) => <TextField {...params} label="approles" variant="outlined" />}
          onChange={async (e,val)=>{
            context.obieeDispatch({type:'show_loading'});

            const result = await getListUsersOfRole(val.name);
            setCurrentApprole(val);
            if(result.error){
              context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
            }
            else{
              console.log('setUserOfApproles',result.data);
              setCurrentUsers(result.data);
              setRight(result.data);
            }

            context.obieeDispatch({type:'hide_loading'});          
          }}
        />        
        </Grid>
      <Grid item xs={12} md={5}>{customList(left,1000000)}</Grid>
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
      <Grid item xs={12} md={5}>{customList(right,2000000)}</Grid>

      <Grid
        container
        item
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
      >
          <ObieeButtonOperation onExecute={async ()=>
            {
              context.obieeDispatch({type:'show_loading'});

              const listRemove =  not(currentUsers,right);
              const listAdd = not(right,currentUsers);

              //console.log('role',currentApprole,'listRemove',listRemove,'listAdd',listAdd);
              //return;              
    
              const listFailed = [];
              listAdd.forEach(async item=>{

                const result = await approleAssignToRole(currentApprole.name,item.name);
                if(result.error){
                  listFailed.push(item);
                }
              });

              listRemove.forEach(async item=>{

                const result = await approleAssignToRole(currentApprole.name,item.name);
                console.log(result);
                if(result.error){
                  listFailed.push(item);
                }
              });

              if(listFailed.length === 0)
                context.obieeDispatch({type:'show_message',messageToShow:{type:'info',message:getText('Operation Successful')}});                    
              else
                context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+"\n"+result.error.errorLatin}});


              setMode('');
    
              context.obieeDispatch({type:'hide_loading'});          
            }} title={strSave} />
      </Grid>
    </Grid>
  );
}
