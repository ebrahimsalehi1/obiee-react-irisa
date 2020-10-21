import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import {UserContext} from '../../Context';
import {loginStatisticData} from '../../webservice/Statistic';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width:250,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ObieeProgress(props) {
  const {title} = props;
  const classes = useStyles();
  const [data,setData] = React.useState(null);

  const context = React.useContext(UserContext);

  React.useEffect(()=>{
      async function fetchData(){

        context.obieeDispatch({type:'show_loading'});

        let result = await loginStatisticData();
        console.warn('loginStatisticData',result);

        if(result.error){
            //setShowmessage(result.errorPersian+"\n"+result.errorLatin);
            context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+"\n"+result.error.errorLatin}});
        }
        else{
            setData(result.data);
        }

        context.obieeDispatch({type:'hide_loading'});

      }
      fetchData();   
  },[]);     

  return (       
    <Card className={classes.root} style={{margin: '0px', display: 'flex', padding: '0px',width:'250px',height:'150px'}}>   

      <Grid spacing={0}             
       container
       direction="row"
       style={{padding:0,margin:0}}       
      >

        <Grid item xs={12} md={12} >
          <Typography variant="caption">{title}</Typography>
        </Grid>

        {data && 
        <>
        <Grid item xs={6} md={6}>
            <Typography variant="h5" >{data.percent}%</Typography>
        </Grid>
        <Grid item xs={6} md={6}>
            <Typography variant="h5" >{data.value}</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
            <BorderLinearProgress variant="determinate" value={data.percent} />
        </Grid>    
        </>    
        }

      </Grid>
    </Card>   
  );
}
