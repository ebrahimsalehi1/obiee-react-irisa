import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import ImageSignIn from "../../public/img/logo-irisa.png";
// import Copyright from '../widgets/ObieeCopyright';
import {UserContext} from '../Context';
import {login} from '../webservice/Login';
import {getUserInfo} from '../webservice/User';

import '../../public/css/bootstrap-rtl.min.css';
import '../../public/css/bootstrap.min.css';
//import '../../public/css/style.css';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="http://www.irisaco.com/fa" target="_blank">
//         IRISA
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  mainBody:{
    padding: '1px'
  },
  footer :{
    textAlign: 'center'
  },
  footerLogo: {
    color: '#0847a6'
  },
  footerText: {
    fontSize: '0.8rem',
    color: '#7D8799',
  },
  linkColor:
  {
      color: '#37b37f'
  },
  veen: {
    width: '65%',
    margin: '30px auto 15px auto',
    backgroundSize: 'cover',
    minHeight: '480px',
    display: 'block',
    position: 'relative',
    boxShadow: '0 0 0px rgba(0, 0, 0, .14), 0 2px 4px rgba(0, 0, 0, .14)',
    backgroundColor: '#fff',
    borderRadius: '8px',
  },
  leftDiv: {
    width: '60%',
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundImage: 'url(./public/img/bg.png)',
    height: '100%',
    backgroundSize: '80%',
    backgroundRepeat: 'no-repeat',
    margin: 'auto',
    backgroundPosition: 'center !important',
  },
  wrapper: {
    position: 'absolute',
    width: '40%',
    height: '100%',
    top: '7%',
    right: 0,
    background: 'transparent',
    color: '#42526E',
    overflow: 'hidden',
  } ,
  loginTitle:
  {
      color: '#42526E',
      fontSize: '0.9rem',
  },   
  loginTitleSpan:{    
    borderBottom: 'solid 3px #00885a'
  },
  logo: {
    height: '75px',
    marginTop: '10px'
  },
  logoText: {
    fontWeight: 'bold',
    color: '#00885a',
    fontSize: '1rem',
  },
  darkBtn: {
    borderColor: '#00885a',
    background: '#00885a',
    width: '60%'
  },
  darkBtnHover: {
    borderColor: '#00885a',
    background: '#00885a',
    width: '60%',
    boxShadow: '0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28)',
    cursor: 'pointer'
  },  
}));

export default function SignIn(props) {
  const classes = useStyles();

  const [userName,setUserName] = React.useState('');
  const [password,setPassword] = React.useState('');

  const context = React.useContext(UserContext);

  async function handleLogin(){

    let result = await login(userName,password);

    console.log('SignIn result',result);

    if(result.error){
      context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
    }
    else{       
      localStorage.setItem('sessionId',result.data) ;
      result =  await getUserInfo(localStorage.getItem('user'));

      if(result.error){
        context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:"error in get info"}});
        context.obieeDispatch({type:'login'});
      }
      else{        
        //console.log("login-",result.data)
        context.obieeDispatch({type:'login',userInfo:result.data});
      }
    }
  }

  return (
<div className={classes.mainBody}>
    <div className={classes.veen}>
        <div className={classes.leftDiv}>
            <div>
                <div className="row">
                    <div className="col-md-12"></div>
                </div>
                <span id="tgl" style={{display: 'none', marginRight: '20px'}}></span>
            </div>
        </div>

        <div className={classes.wrapper}>
            {/* <form data-toggle="validator" role="form" id="login" tabIndex="500"> */}
                <div className={classes.loginTitle} style={{display: 'block'}}>
                    <span className={classes.loginTitleSpan}>ورود به حساب کاربری</span>
                </div>
                <img className={classes.logo} src="./public/img/logo.svg" alt=""/>
                <h4 className={classes.logoText}>مدیریت گزارشات هرمزگان</h4>
                <div className="form-group user-input">
                    <label htmlFor="inputName" className="control-label">نام کاربری</label>
                    <input type="text" className="form-control" id="inputName" placeholder="لطفا نام کاربری خود را وارد نمایید" required data-error="نام کاربری را وارد نمایید"
                      onChange={e=>setUserName(e.target.value)}                    
                    />
                    <div className="help-block with-errors"></div>
                </div>
                <div className="form-group passwd">
                    <label htmlFor="password" className="control-label">رمز عبور</label>
                    <input type="password" className="form-control" id="password" placeholder="لطفا رمز عبور خود را وارد نمایید" required data-error="رمز عبور را وارد نمایید"
                      onChange={e=>setPassword(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                </div>
                <div className="form-group checkbox">
                    <label><input type="checkbox" value=""/>به خاطر سپردن ورود من در این سیستم</label>
                </div>

                <div className="submit">
                    <button  className={classes.darkBtn} onClick={async ()=>{await handleLogin()}}>ورود</button>
                </div>
            {/* </form> */}
        </div> 
        
    </div>

    <div className={classes.footer}>
        <label className={classes.footerLogo}><img src="./public/img/hoghoogh.jpg"/></label>
        <br/>
            <div>
                <span className={classes.footerText}>
                    کلیه حقوق متعلق به شرکت 
                    <strong ><a className={classes.linkColor} href="http://www.irisaco.com"> ایریسا </a></strong> می باشد
                </span>
            </div>
    </div>

</div>
    ) 
  ;
}
