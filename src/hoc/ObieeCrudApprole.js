import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import {makeStyles,fade} from '@material-ui/core/styles';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

import PropTypes from 'prop-types';
import data from '../../db.json';
const ObieeItemApprole = React.lazy(()=>import("./ObieeItemApprole"));
import ObieeDialog from '../widgets/ObieeDialog';
import {getText} from '../utils/Utils';

const useStyles = makeStyles(theme=>({
  root: {
    width: '100%',
    //maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },   
}))

export default function ObieeCrudApprole(props){

    const classes = useStyles();

    const {url} = props;

    const [approles,setApproles] = React.useState(data.approles);
    const [openModal,setOpenModal] = React.useState(false);
    const [search,setSearch] = React.useState('');

    const strSearchApproles = getText('Search approles');

    React.useEffect(()=>{

      // axios(
      //   {
      //     url:url,
      //     method:'get',
      //     headers:{'Access-Control-Allow-Origin':url}
      //   }).
      // then(res=>{
      //     console.log(res.data,res.status);
      //     setUserList(res.data);
      // }).
      // catch(err=>{

      // })

      //setApproles(data.approles);
  
    },[]);

    React.useEffect(()=>{
        console.log('use effect data',approles);
    },[approles])

    return (
    <Card className={classes.root} variant="outlined">
      <CardContent>

      <Grid container spacing={1} >

      <Grid item xs={12} md={8}>
          <TextField
            //className={classes.input}
            placeholder={strSearchApproles}
            inputProps={{  'aria-label': {strSearchApproles} }}
            value={search}
            onChange={e=>{
              setSearch(e.target.value);
              }}
            variant='outlined'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={4}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search"
          onClick={()=>{
            let filteredData = null;
            filteredData = data.approles.filter(item=>
                  item.approleName.includes(search) ||
                  item.approleDesc.includes(search) ||
                  item.approleType.includes(search) ||
                  item.approleLatinName.includes(search)                 
                );
                //console.log(search,filteredData);
            setApproles(filteredData);
          }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton 
            type="submit" 
            className={classes.iconButton} 
            aria-label="add" 
            onClick={()=>{
                setOpenModal(true);
            }}
            >
            <AddIcon />
          </IconButton>
        </Grid>
        
        </Grid>

        <ObieeDialog 
        title="Add new Approle"
        openModal={openModal}
        TransitionComponent
        eventClose={()=>{
          setOpenModal(false);
        }}
        >
        <ObieeItemApprole mode="add" onAdd={()=>{
          setOpenModal(false);
        }}/>

        </ObieeDialog>

        {
          
          approles.map((approle,index)=>(<ObieeItemApprole mode="edit" key={index} approle={approle}/>))
        }
      </CardContent>
    </Card>
    )
}

ObieeCrudApprole.propTypes = {
  url: PropTypes.string.isRequired,
}
