import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import {makeStyles,fade} from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import data from '../../db.json';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme=>({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  listitem:{
    borderBottom:'1px solid black'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 2,
  },   
}))

export default function ObieeReports(props){

    const classes = useStyles();

    const {url} = props;

    const [reports,setReports] = React.useState(data.reports);
    const [search,setSearch] = React.useState('');

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

    // React.useEffect(()=>{
    //     console.log('use effect data',approles);
    // },[approles])

    return (
    <Card className={classes.root} >
      <CardContent>

      <Grid container spacing={1} >

      <Grid item xs={12} md={10}>
          <TextField
            //className={classes.input}
            placeholder="Search reports"
            inputProps={{ 'aria-label': 'Search reports' }}
            value={search}
            onChange={e=>{
              setSearch(e.target.value);
              }}
            variant='outlined'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={2}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search"
          onClick={()=>{
            let filteredData = null;
            filteredData = data.reports.filter(item=>
                  item.name.includes(search) ||
                  item.title.includes(search) ||
                  item.link.includes(search) 
                );
                //console.log(search,filteredData);
            setReports(filteredData);
          }}
          >
            <SearchIcon />
          </IconButton>
        </Grid>
        
      </Grid>
      <List className={classes.root}>

        {          
          reports.map((report,index)=>(
            <ListItem alignItems="flex-start" key={index} className={classes.listitem}>
            <ListItemText
              key={index}
              primary={report.name+'-'+report.title} 
              secondary={
                <Link href="#"  key={index} onClick={()=>{}}>
                  {report.link}
                </Link>
              }
              />
            </ListItem>

          ))
        }
        </List>
      </CardContent>
    </Card>
    )
}

ObieeReports.propTypes = {
  url: PropTypes.string.isRequired,
}
