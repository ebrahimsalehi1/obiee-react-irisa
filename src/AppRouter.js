import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeSignin from './hoc/ObieeSignin';
//import ObieeCrudApprole from './hoc/ObieeCrudApprole';
//import { TramRounded } from '@material-ui/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
//import { createBrowserHistory } from 'history';
import {UserContext} from './Context';
import App from './App';
import {isSessionValid} from './webservice/Login';

export default function AppRouter(){

    const context = React.useContext(UserContext);

    const [isSessionValidate,setIsSessionValidate] = React.useState(context.obieeState.isAuthenticated);

    React.useEffect(async ()=>{

      const checkSessionIsValid = async ()=>{

          if(!localStorage.getItem('sessionId') || localStorage.getItem('sessionId')==="0"){
              return false;
          }

          let isValid;

          const result = await isSessionValid({sessionId:localStorage.getItem('sessionId')});
          if(result.status===200)
              isValid = result.data;
          else
              isValid = false;

          return isValid;
      
      }

      const isValid = await checkSessionIsValid();
      setIsSessionValidate(isValid);

      context.obieeDispatch({type:'is_session_valid',isAuthenticated:isValid})

  },[]);

    return (
        <Router>
<div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>

          <Route path="/login"          
          render={()=>!isSessionValidate ? <ObieeSignin /> : <App/>
          } />
       
          <Route path="/" 
                render={()=>!context.obieeState.isAuthenticated ? <ObieeSignin /> : <App/>
                } />

          {/* {!isSessionValidate ? <ObieeSignin /> : <App/>}                                         */}

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>

</div>
        </Router>
    );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
