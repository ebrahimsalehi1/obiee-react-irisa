import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeSigin from './hoc/ObieeSignin';

export default function App(){
    const [isAuthenticate,setIsAuthenticate] = React.useState(false);
    return (
        <div>
            {
            !isAuthenticate &&
                <ObieeSigin handleLogin={(userName,pass)=>{
                    if(userName==='admin' && pass==='admin')
                        setIsAuthenticate(true);
                    else
                        setIsAuthenticate(false);
                }}/>
            }
            {
                isAuthenticate &&
                <Dashboard />
            }
        </div>
    );
}

