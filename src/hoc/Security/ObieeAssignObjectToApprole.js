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

export default function ObieeAssignObjectToApprole() {

  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([]); // data.users
  const [right, setRight] = React.useState([]);

  const [approles,setApproles] = React.useState([]);
  //const [userOfApproles,setUserOfApproles] = React.useState([]);

  //const rightChecked = intersection(checked, right);
  //const leftChecked = intersection(checked, left);

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

    </Grid>
  );
}
