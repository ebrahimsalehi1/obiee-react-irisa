import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
    AreaChart, Area, ResponsiveContainer,
} from 'recharts';
import {Card} from "@material-ui/core";
//import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import {loginStatisticData} from '../webservice/Statistic';

export default function ObieeChartLogin() {

    const [loginData, setLoginData] = React.useState([]);
    const [showmessage,setShowmessage] = React.useState('');

    React.useEffect(()=>{

        async function fetchData(){
            const result = await loginStatisticData();

            if(result.errorMessage){
                setShowmessage(result.errorPersian+"\n"+result.errorLatin);
              }
              else{
                setLoginData(result.data);
              }
        }

        fetchData();        

    },[]);

    return (
    <div>
        <Typography variant="caption"  >Watching Dashboard</Typography>
        <Card style={{margin: '0px', display: 'flex', padding: '0px',width:'250',height:'150'}}>
                {/* <ResponsiveContainer width={250} height={150}> */}
                    <LineChart
                        data={loginData}
                        syncId="anyId"
                        margin={{
                            top: 30, right: 10, left: 0, bottom: 0,
                        }}
                        fontSize={'10px'}
                    >
                        <XAxis dataKey="sum" padding={{left: 40, right: 40}}/>
                        <XAxis dataKey="percent" padding={{left: 40, right: 40}}/>

                        {/* <YAxis domain={[0, 3000]}/> */}
                        {/* <CartesianGrid strokeDasharray="3 2"/> */}
                        <Line type="linear" dataKey="sum" stroke="#5850EC" strokeWidth={3}/>
                        {/* <Tooltip>swhguwger</Tooltip> */}
                    </LineChart>
                {/* </ResponsiveContainer> */}
        </Card>
    </div>
    );
}
