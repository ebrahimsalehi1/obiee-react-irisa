import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

export default function ObieeSnackbar(props) {

  const {open,message,handleClose,key,autoHideDuration} = props;

  return (
    <div>
    {  open &&
      <Snackbar
        open={true}
        onClose={handleClose}
        TransitionComponent={TransitionDown}
        message={message}
        key={key}
        autoHideDuration={autoHideDuration}
        
      />
    }
    </div>
  );
}
