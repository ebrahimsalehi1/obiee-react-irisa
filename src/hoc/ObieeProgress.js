import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";

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
  const {value,percent,title} = props;
  const classes = useStyles();

  return (
    <div>
       
       <Typography variant="caption" >{title}</Typography>
       <Card style={{margin: '0px', display: 'flex', padding: '0px',width:'250',height:'150'}}>   
      <Grid spacing={0} 
       className={classes.root}      
       container
       direction="row"
       //justify="flex-start"
       //alignItems="flex-start"      
      >

        <Grid item xs={6} md={6}>
            <Typography variant="h5" className={classes.root}>{percent}%</Typography>
        </Grid>
        <Grid item xs={6} md={6}>
            <Typography variant="h5" className={classes.root}>{value}</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
            <BorderLinearProgress variant="determinate" value={percent} />
        </Grid>

      </Grid>
      </Card>   
      </div>
  );
}
