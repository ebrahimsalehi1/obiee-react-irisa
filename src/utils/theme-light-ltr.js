import {createMuiTheme} from '@material-ui/core/styles';

export const themeLightLTR = createMuiTheme({
    direction: 'ltr',
    MuiDrawer: {
        root: {
            position: 'absolute',
        },
        paperAnchorDockedRight: {
            width: 225
        },
        paper: {
            //backgroundColor: '#18202c',
            //backgroundColor: '#f4f6f8',
            backgroundColor: '#ffffff',
            color:'#263238',
        },


    },
    MuiAppBar: {
        colorPrimary: {
            backgroundColor: '#3f51b5'
        }
    },
});