import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import ObieeAppBar from './ObieeAppBar';
//import MyAppBar from './MyAppBar';
//import CardReport from '../widgets/ObieeCardReport';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
//import Text from '../widgets/ObieeText';
import {getText} from '../utils/Utils';
import Link from '@material-ui/core/Link';
//import ObieeTreeView from '../widgets/ObieeTreeView.js';
import ObieeDrawerMenuList from './ObieeDrawerMenuList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    direction:'ltr',
    display: 'flex',
    
  },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
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
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    //display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  avatar:{
    backgroundColor: blue[500],
  }
}));

// function Version() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="left">
//       <Link color="inherit" href="http://www.irisaco.com/fa" target="_blank">
//         {getText('Version')} 0.0.10
//       </Link>
//     </Typography>
//   );
// }

export default function ObieeDrawer(props) {

  const {open,handleDrawerClose,children} = props;

  const classes = useStyles();
  const theme = useTheme();
  //const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* <Card style={{"minHeight":"60px","boxShadow":"none","padding":"0","margin":"0"}}>
          <CardHeader
          //avatar={<Avatar aria-label="user" className={classes.avatar}>U</Avatar>}
          
          avatar={<IconButton><AccountCircleIcon/></IconButton>}
          title="Ehsan Karimi"
          subheader="Person Position"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Person Position
            </Typography>
          </CardContent>
        </Card>
        <Divider /> */}
        <ObieeDrawerMenuList open={open}/>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

      {children}


      </main>
    </div>
  );
}
