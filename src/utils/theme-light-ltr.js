import {createMuiTheme} from '@material-ui/core/styles';
//import { enUS } from '@material-ui/core/locale';
import * as locales from '@material-ui/core/locale';

export const themeLightLTR = createMuiTheme({
    type:'themeLightLTR',
    direction: 'ltr',
    body:{
        backgrouundColor:'#FFFFFF'
    },     
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
    overrides: {

    MuiAppBar: {
        colorPrimary: {
            backgroundColor: '#3f51b5'
        }
    },

    MuiCardHeader: {
        root: {
            padding: '8px'
        }, title: {
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: '#263238'
        }, action: {
            marginTop: 0,
            color:'black'
        }, avatar: {
            marginRight: 9,
            marginLeft: 0,
        }
    },
    }    
}, locales['enUS']);