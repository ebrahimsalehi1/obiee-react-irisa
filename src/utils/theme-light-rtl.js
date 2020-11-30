import {createMuiTheme} from '@material-ui/core/styles';
//import { faIR } from '@material-ui/core/locale';
import * as locales from '@material-ui/core/locale';
import { blue } from '@material-ui/core/colors';
//import IranSansWebWoff from '../../public/fonts/iran-sans-web.woff';
//import IranSansWebWoff2 from '../../public/fonts/iran-sans-web.woff2';
//import IranSansWebTTF from '../../public/fonts/iran-sans-web.ttf';
//import IranSansWebEOT from '../../public/fonts/iran-sans-web.eot';

// const IranSansWeb = {
//   fontFamily: 'IranSansWeb',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     url(${IranSansWebWoff2}) format('woff2')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

export const themeLightRTL = createMuiTheme({
    type:'themeLightRTL',
    direction: 'rtl',
    palette:{
      type: 'light'    
    },
  overrides: {
    MuiDrawer:theme=>( {
        root: {
            direction:'ltr',
            display: 'flex',
          },
          menuButton: {
            marginRight: 36,
          },
          hide: {
            display: 'none',
          },
          drawer: {
            width: 240,
            flexShrink: 0,
            whiteSpace: 'nowrap',
          },
          drawerOpen: {
            width: 240,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
          drawerClose: {
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
              width: theme.spacing(9) + 1,
            },
          },
          toolbar: {
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
          },
          content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
          avatar:{
            backgroundColor: blue[500],
          }
    }),
    MuiAppBar: {
        colorPrimary: {
            backgroundColor: '#3f51b5'
        }
    },

    MuiCardHeader: {
        root: {
            padding: '8px'
        }, 
        title: {
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: '#263238',
        }, 
        action: {
            marginTop: 0,
            color:'black'
        }, 
        avatar: {
            marginRight: 9,
            marginLeft: 0,
        }
    },
    MuiDialogContent:{
      root:{
        padding:0,
      }
    },
    MuiDialogActions:{
      root:{
        padding:0,
      }
    },
    MuiTypography:{ 
      root:{
        textAlign:'left',
        fontFamily: 'IRANSans'
      },
      h4:{
        fontFamily: 'IRANSans'
      },
      subtitle1:{
        fontFamily: 'IRANSans'
      },
      body1:{
        fontFamily: 'IRANSans'
      }
    },

    MuiInputBase:{
      input:{textAlign:'left'}
    },
    // material-table Start
    MuiTableRow:{
      root:{
          fontFamily: 'IRANSans',
          fontSize:10,
          height: 60                    
      },
      head: {
          height: 40,
          borderBottom: "1px solid #c7c7c7"
      }
    },
    MuiTableCell: {
      root: {
                  padding: '0 4px',
                  textAlign: "center"
              },
      body: {
                  fontSize: '11px'
              },
      head: {
                  fontSize: '0.7rem',
                  height: 60
              },
      alignLeft:{textAlign:'center'}
    },
    MuiTablePagination: {
      caption: {
          fontSize: '11px'
      }
    },
    MuiTableSortLabel: {
      root: {
          //color: "#009ce6",
          color: '#263238',
          alignContent: 'center',
      }
    },
    MuiTable:{
      root:{
          direction:'ltr',
          width: '100%',
      }
    }        
    // material-table End

  }
}, locales['faIR']);
