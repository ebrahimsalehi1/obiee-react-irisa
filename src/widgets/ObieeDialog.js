import React,{memo} from 'react';
import Dialog from '@material-ui/core/Dialog';
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import {Close} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';

const useDialogTitleStyles = makeStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: '16px',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(2),
        top: theme.spacing(2),
        color: theme.palette.grey[500],
    }
}));

// const useStyle = makeStyles(theme=>({
//     dialogContent:{
//         root:{
//             padding:0,
//             margin:0,
//         }
//     }
// }));

const DialogTitle = (props => {
    const { children, onClose } = props;
    const classes = useDialogTitleStyles();
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h5" >{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const useDialogActionsStyles = makeStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: "0px",
        padding:"8px",
    },
}));

const DialogActions = (props)=>{
    const classes = useDialogActionsStyles();
    const {children} = props;

    return (
        <MuiDialogActions>
            {children}
        </MuiDialogActions>
    );
}

const usePaperDialogContentStyles = makeStyles(theme => ({
    root:{
        // paddingTop:"16px",
        // paddingLeft: "16px",
        // paddingRight: "16px",
        // paddingBottom: "16px",
        padding:0,
        margin: 0,
        overflow: 'hidden',
        maxHeight: '600px',
        border:'0px',
        //boxShadow: 0
    }
}));

// const PaperDialogContent = (props) => {
//     const classes = usePaperDialogContentStyles();
//     const {children} = props;
//     return (<Paper>
//         {children}
//         </Paper>);
// }

// function Transition(props) {
//     return <Slide direction="left" {...props} />;
// }

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

function ObieeDialog(props)  {

        const {eventClose, maxWidth,handleClose,
            openModal,title,children,fullScreen,
            TransitionComponent,actionBar,onKeyDown,useOwnDialog,...others} = props;

        return (
            <>
            {openModal &&
            <Dialog
                onClose={eventClose}
                onKeyDown={onKeyDown}
                //data-testId
                aria-labelledby="customized-dialog-title"
                open={openModal}
                fullScreen={fullScreen}
                maxWidth={maxWidth}
                //TransitionComponent={TransitionComponent ? Transition : null}
                {...others}
            >

                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {title}
                </DialogTitle>

                <MuiDialogContent>

                    {/* <PaperDialogContent> */}

                            {children}

                    {/* </PaperDialogContent> */}

                </MuiDialogContent>

                <DialogActions>
                    {actionBar}
                </DialogActions>

            </Dialog>
            }
            </>
        );
    
}

ObieeDialog.propTypes = {
    eventClose: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    fullScreen:PropTypes.bool,
    TransitionComponent:PropTypes.bool,
    actionBar:PropTypes.node
};

export default ObieeDialog;

