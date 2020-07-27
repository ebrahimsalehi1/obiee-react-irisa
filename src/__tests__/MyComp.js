
import React from 'react';

export const PureComp  = ()=>{
    const [available,setAvailable] = React.useState(false);
    return
    (<div>
    <button onClick={()=>{setAvailable(!available)}}>click me please</button>
    {/* {
        available && 
        <input type="TEXT" value="hello"/>
    } */}
    </div>)
}
