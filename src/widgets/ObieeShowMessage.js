import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {UserContext} from '../Context';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
   },
}));

export default function ObieeShowMessage(props) {

  const classes = useStyles();
  const {open,onClose,message,type} = props;

  //const [opn,setOpn] = React.useState(true);

  const context = React.useContext(UserContext);

  React.useEffect(()=>{

    let myTimer;

    myTimer = setTimeout(()=>{
      context.obieeDispatch({type:'hide_message'});
    },6000);

    return ()=>{
      clearTimeout(myTimer);
    }

  },[])

  return (
    <div className={classes.root}>
      <Snackbar 
      open={open}  
      onClose={onClose}                 
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      > 
        <Alert onClose={onClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
      {/* 
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> 
      */}
    </div>
  );
}

//autoHideDuration={6000}
