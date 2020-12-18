import React from 'react';
import { fade, makeStyles,useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
//import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//import MenuItemText from '@material-ui/core/menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import HomeIcon from '@material-ui/icons/Home';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
// import Tune from '@material-ui/icons/Tune';
import SettingsIcon from '@material-ui/icons/Settings';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SwitchUI from '@material-ui/core/Switch';
//import Grid from '@material-ui/core/Grid';
import LanguageIcon from '@material-ui/icons/Language';
import BrightnessHighIcon from '@material-ui/icons/Brightness7';
import BrightnessLowIcon from '@material-ui/icons/Brightness4';
//import RightToLeftPageIcon from '@material-ui/icons/FormatTextdirectionRToL';
//import LeftToRightPageIcon from '@material-ui/icons/FormatTextdirectionLToR';
import clsx from 'clsx';
import {UserContext} from '../Context';
import Text from '../widgets/ObieeText';
import {getText} from '../utils/Utils';
import Tooltip from '@material-ui/core/Tooltip';
//import ObieeAppearance from './ObieeApperance';
//import {showLoading} from '../utils/GeneralContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import {hasSystemFeatures} from '../utils/Utils';
import ObieeAppProgress from '../widgets/ObieeAppProgress';

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

  const {open,handleDrawerOpen,handleSettings,onHomeClick} = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  //const [openDrawer,setOpenDrawer] = React.useState(false);
  const [languageMenu,setLanguageMenu] = React.useState(null);
  //const [openDialog,setOpenDialog] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  //const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLanguageMenuOpen = Boolean(languageMenu);

  //const [anchorElAppearance, setAnchorElAppearance] = React.useState(null);

  // const handleClickAppearance = (event) => {
  //   setAnchorElAppearance(event.currentTarget);
  // };

  // const handleCloseAppearance = () => {
  //   setAnchorElAppearance(null);
  // };

  // const handleSettings = ()=>{
  //   handleSettings(true);
  // }

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
      <MenuItem onClick={handleMenuClose}>{getText('Profile')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{getText('My account')}</MenuItem>
    </Menu>
  );

const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleSettings}>
  //         <SettingsIcon />
  //         <Badge badgeContent={4} color="secondary">
  //           <SettingsIcon />
  //         </Badge> 
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton aria-label="show 11 new notifications" color="inherit">
  //         <Badge badgeContent={11} color="secondary">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={e=>{handleLogedIn(false)}}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleLanguageMenuOpen}>
  //     <IconButton 
  //             color="inherit"
  //             aria-label="Show list of languages"              
  //           >
  //           <LanguageIcon/>
  //     </IconButton>
  //     <p>Languages</p>
  //     </MenuItem> 
  //     <MenuItem>
  //     <IconButton 
  //       color="inherit"
  //       aria-label="Brightness"              
  //       >
  //       <BrightnessHighIcon/>
  //     </IconButton>
  //     <p>Brightness</p>
  //     </MenuItem>
  //     <MenuItem>
  //     <IconButton 
  //       color="inherit"
  //       aria-label="left to right / right to left"                            
  //       >
  //       <RightToLeftPageIcon/>
  //     </IconButton>
  //     <p>Left - Right</p>
  //     </MenuItem>
  //   </Menu>
  // );

  const renderLanguages =  
  (
    <Menu
      anchorEl={languageMenu}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isLanguageMenuOpen}
      onClose={handleLanguageMenuClose}
    >
    <MenuItem onClick={e=>{
      handleLanguageMenuClose(e);
      context.obieeDispatch({type:'change_language_fa'});
    }}>
      Persian
    </MenuItem>
    <MenuItem onClick={e=>{
            handleLanguageMenuClose(e);
            context.obieeDispatch({type:'change_language_en'});
    }}>
      English
    </MenuItem>
    <MenuItem onClick={e=>{
      handleLanguageMenuClose(e);
      context.obieeDispatch({type:'change_language_de'});
    }}>
      Deutsch
    </MenuItem>
  </Menu>
  ) ;

 const context = React.useContext(UserContext);

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
            <Text keyStr="IrisaProductions"/>
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
            {context.obieeState.formTitle ? " - "+context.obieeState.formTitle : ""} 
            </Typography>            
            {hasSystemFeatures('appbar-search') ?  
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={getText("Search")}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label':'search','list':'actions','name':'actionList','id':'actionList'}}
                onChange={e=>
                  {
                    switch(e.target.value){
                      case 'Dashboard':
                        context.obieeDispatch({type:'show_dashboard_home'});
                        break;
                      case 'Analytics':
                        context.obieeDispatch({type:'show_dashboard_dashboard'});
                        break;                                              
                      case 'Visual Analyzer':
                        context.obieeDispatch({type:'show_dashboard_analyser'});
                        break;
                      case 'BI Publisher':
                        context.obieeDispatch({type:'show_dashboard_transactional'});
                        break;                                                                                       
                      case 'Application roles':
                        context.obieeDispatch({type:'show_approle'});
                        break;
                      case 'User approles':                        
                        context.obieeDispatch({type:'show_user_approle'});
                        break;
                      case 'Objects Of approle':                        
                        context.obieeDispatch({type:'show_object_approle'});
                        break;
                      case 'Setting':
                        context.obieeDispatch({type:'show_setting'});
                        break;
                      case '':
                        break;
                      default:
                        return;   
                    }
                  }}
              />
              <datalist id="actions">
                <option value="Dashboard"/>
                <option value="Analytics"/>
                <option value="Visual Analyzer"/>
                <option value="BI Publisher"/>
                <option value="Application roles"/>
                <option value="User approles"/>
                <option value="Objects Of approle"/>
                <option value="Setting"/>
              </datalist>

            </div> : null
            }
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            
              {/* <IconButton 
                color="inherit"
                aria-label="go to home"
                onClick={onHomeClick}
              >
                <Tooltip title={getText("Home")} >
                <HomeIcon/>
                </Tooltip>
              </IconButton> */}

              {/* <IconButton aria-label="show 4 new mails" color="inherit" onClick={()=>{
                context.obieeDispatch({type:'show_loading'})
              }}> */}

                {/* </IconButton>   */}

              {hasSystemFeatures('language') ?
              <IconButton 
                color="inherit"
                aria-label="Show list of languages"
                onClick={handleLanguageMenuOpen}
              >
                <Tooltip title={getText("Appearance")} >
                <LanguageIcon/>
                </Tooltip>
              </IconButton> : null
              }
              {hasSystemFeatures('theme') ?
              <IconButton 
                color="inherit"
                aria-label="Brightness"    
                onClick={()=>context.obieeState.theme ? context.obieeDispatch({type:'change_to_light'}) : context.obieeDispatch({type:'change_to_dark'})}            
                >
                {!context.obieeState.theme ? <BrightnessHighIcon/> : <BrightnessLowIcon/>}
              </IconButton> : null
              }
              {/* <IconButton 
                color="inherit"
                aria-label="left to right / right to left"        
                onClick={handleChangeDirection}                    
                >
                {!direction ? <RightToLeftPageIcon/> : <LeftToRightPageIcon/>}
              </IconButton>  */}

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={()=>context.obieeDispatch({type:'logoff'})}
                color="inherit"
              >
                <Tooltip title={getText("Exit")} >
                <ExitToApp />
                </Tooltip>
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

          {context.obieeState.progress && 
            // <LinearProgress />
                            <ObieeAppProgress />

          } 

        </AppBar>               
      
      {/* <ObieeAppearance 
      anchorEl={anchorElAppearance} 
      handleClose={handleCloseAppearance}
      handleChangeTheme={handleChangeTheme}        
      handleChangeDirection={handleChangeDirection}   
      /> */}

      {/* {renderMobileMenu} */}
      {/* {renderMenu}  */}
      {hasSystemFeatures('language') ? renderLanguages:null}
      </div>
  );
}
