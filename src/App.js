import React from 'react';
import Dashboard from './hoc/Dashboard';
import ObieeSigin from './hoc/ObieeSignin';

export default function App(){
    const [isAuthenticate,setIsAuthenticate] = React.useState(false);
    return (
        <div>
            <ObieeSigin />
            {
                isAuthenticate &&
                <Dashboard />
            }
        </div>
    );
}

