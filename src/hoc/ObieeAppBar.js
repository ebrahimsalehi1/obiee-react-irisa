import React from 'react';
import { fade, makeStyles,useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//import MenuItemText from '@material-ui/core/MenuItemText';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import MailIcon from '@material-ui/icons/Mail';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import SwitchUI from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LanguageIcon from '@material-ui/icons/Language';
import BrightnessHighIcon from '@material-ui/icons/Brightness7';
import BrightnessLowIcon from '@material-ui/icons/Brightness4';
import RightToLeftPageIcon from '@material-ui/icons/FormatTextdirectionRToL';
import LeftToRightIcon from '@material-ui/icons/FormatTextdirectionLToR';

import clsx from 'clsx';
import UserContext from '../Context';

import ObieeDialog from '../widgets/ObieeDialog';

const drawerWidth = 240;
//const mtheme = useTheme();

const useStyles = makeStyles((theme) => ({
  // root: {
  //   direction: 'rtl',
  // },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    direction: 'ltr' ,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default function ObieeAppBar(props) {

  const {open,handleDrawerOpen} = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [openDrawer,setOpenDrawer] = React.useState(false);
  const [languageMenu,setLanguageMenu] = React.useState(null);
  const [openDialog,setOpenDialog] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLanguageMenuOpen = Boolean(languageMenu);

  const handleSystemInfos = ()=>{
    setOpenDialog(!openDialog);
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageMenu(event.currentTarget);
  }


  const handleLanguageMenuClose = (event) => {
    setLanguageMenu(null);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleSystemInfos}>
          <Badge badgeContent={4} color="secondary">
            <SubtitlesIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleLanguageMenuOpen}>
      <IconButton 
              color="inherit"
              aria-label="Show list of languages"              
            >
            <LanguageIcon/>
      </IconButton>
      <p>Languages</p>
      </MenuItem>
      <MenuItem>
      <IconButton 
        color="inherit"
        aria-label="Brightness"              
        >
        <BrightnessHighIcon/>
      </IconButton>
      <p>Brightness</p>
      </MenuItem>
      <MenuItem>
      <IconButton 
        color="inherit"
        aria-label="left to right / right to left"                            
        >
        <RightToLeftPageIcon/>
      </IconButton>
      <p>Left - Right</p>
      </MenuItem>
    </Menu>
  );

  const renderLanguages = (
    <Menu
      anchorEl={languageMenu}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isLanguageMenuOpen}
      onClose={handleLanguageMenuClose}
    >
    <MenuItem onClick={()=>{alert('persian');setLanguageMenu(null);}}>
      Persian
    </MenuItem>
    <MenuItem onClick={()=>{alert('english');setLanguageMenu(null);}}>
      English
    </MenuItem>
    <MenuItem onClick={()=>{alert('deutsch');setLanguageMenu(null);}}>
      Deutsch
    </MenuItem>
  </Menu>
  );

  //console.log('my context',this.context);
  const {handleChange} = React.useContext(UserContext);

  return (
    <div>
          <AppBar 
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Irisa Productions
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton 
                color="inherit"
                aria-label="Show list of languages"
                onClick={handleLanguageMenuOpen}
              >
                <LanguageIcon/>
              </IconButton>
              <IconButton 
                color="inherit"
                aria-label="Brightness"              
                >
                <BrightnessHighIcon/>
              </IconButton>
              <IconButton 
                color="inherit"
                aria-label="left to right / right to left"        
                onClick={handleChange}                    
                >
                <RightToLeftPageIcon/>
              </IconButton>
              <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleSystemInfos}>
                <Badge badgeContent={4} color="secondary">
                  <SubtitlesIcon />
                </Badge>
              </IconButton> 
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>               
      
      {renderMobileMenu}
      {renderMenu}
      {renderLanguages}
      {openDialog && 
         <ObieeDialog
         openModal={openDialog}
         title={"Edit Customer"}
         maxWidth={"lg"}
         //fullScreen
         //useOwnDialog={true}
         TransitionComponent
         eventClose={(e) => {
             setOpenDialog(!openDialog);
         }}
         actionBar={
             <>
                 <Button color={"primary"} variant={"outlined"} style={{"width":"75px","margin":"4px"}}>Ok</Button>
                 <Button color={"primary"} variant={"outlined"} style={{"width":"75px","margin":"4px"}}>Cancel</Button>
             </>
         }
     >
         <Grid container spacing={16} >
             <Grid item xs={6} md={6}>
                 <TextField  placeholder={"Email address"} variant={"outlined"}/>
             </Grid>
             <Grid item xs={6} md={6}>
                 <TextField  placeholder={"Full name"} variant={"outlined"}/>
             </Grid>

             <Grid item xs={6} md={6} style={{"background-color":"green"}}>
                 <TextField  placeholder={"Phone Number"} variant={"outlined"} />
             </Grid>
             <Grid item xs={6} md={6}>
                 <TextField  placeholder={"State/Region"} variant={"outlined"}/>
             </Grid>

             <Grid item xs={6} md={6}>
                 <TextField  placeholder={"Country"} variant={"outlined"}/>
             </Grid>
             <Grid item xs={6} md={6}>
                 <TextField  placeholder={"Address 1"} variant={"outlined"}/>
             </Grid>

             <Grid item xs={12} md={12}>
                 <TextField  placeholder={"Address 2"} variant={"outlined"}/>
             </Grid>

             <Grid item xs={6} md={6}>
                 <Typography gutterBottom variant={"h5"}>
                     Discounted Prices
                 </Typography>

                 <Typography gutterBottom component="h6" variant="h6">
                     This will give the user discountedprices for all products
                 </Typography>
                 <SwitchUI
                     checked={false}
                     value={"check box 1"}
                     color={"primary"}
                     onChange={(e)=>{
                         this.setState({checked:!this.state.checked});
                         console.log("checked 1",e);
                     }}
                 />
             </Grid>
             <Grid item xs={6} md={6}>

                 <Typography gutterBottom variant={"h5"}>
                     Email Verified
                 </Typography>

                 <Typography gutterBottom component="h6" variant="h6">
                     Disabling this will automatically send the user a
                     verification email
                 </Typography>
                 <SwitchUI
                     checked={true}
                     value={"check box 2"}
                     color={"primary"}
                     onChange={(e)=>{
                         //this.setState({checked:!this.state.checked});
                         //console.log("checked 2",this.state.checked);
                     }}
                 />
             </Grid>

             <Grid item xs={6} md={6}>
                 <Typography variant={"h5"} gutterBottom>
                     The sample text in middle of form
                 </Typography>
             </Grid>

             <Grid item xs={6} md={6}>
                 <Typography variant={"h5"} gutterBottom>
                     This is a test
                 </Typography>
             </Grid>

             {/*<Grid item xs={12} md={12}>*/}
             {/*    <Card style={{"min-height:":"100px","max-height:":"300px","overflow-y":"auto","border":"1px solid blue"}}>*/}
             {/*    <IbxDNDTree*/}
             {/*        data={*/}
             {/*          [{title:'A',children:[{title:'B',children:[{title:'B11'},{title:'B12',children:[{title:'B121'},{title:'B122'}]},{title:'B13'}]},{title:'C'}]}]*/}
             {/*        }/>*/}
             {/*    </Card>*/}
             {/*</Grid>*/}

         </Grid>
     </ObieeDialog>

      }
      </div>
  );
}
