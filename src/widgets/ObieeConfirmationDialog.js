import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ObieeDialog from "./ObieeDialog";

export default function ObieeConfirmationDialog(props){

    const {dialogContent, dialogTitle,onExecute,onCancel} = props;

    return (
        <ObieeDialog 
            eventClose={onCancel}
            title={dialogTitle} 
            openModal={true} 
            //TransitionComponent
            actionBar={
                <div>
                    <Button onClick={onExecute} variant="outlined" color="primary">
                        تایید
                    </Button>
                    <Button onClick={onCancel} variant="outlined" color="default" autoFocus>
                        انصراف
                    </Button>

                </div>}>
            {dialogContent}
        </ObieeDialog>
    )
    
}

ObieeConfirmationDialog.propTypes = {
    dialogTitle: PropTypes.string.isRequired,
    dialogContent: PropTypes.string.isRequired,
    onExecute: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

