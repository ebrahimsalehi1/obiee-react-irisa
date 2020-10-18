import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import {loginStatisticData} from '../webservice/Statistic';

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];

export default function ObieeChartBarLogin(props)  {

  const {title} = props;

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
        <Typography variant="caption" >{title}</Typography>
        <Card style={{margin: '0px', display: 'flex', padding: '0px',width:'250',height:'150'}}>
        <BarChart 
          width={150} 
          height={150} 
          data={loginData}
          margin={{
            top: 30, right: 10, left: 0, bottom: 0,
          }}
        fontSize={'10px'}
        >
        <Bar dataKey="percent" fill="#8884d8" />
        <Tooltip>swhguwger</Tooltip>
      </BarChart>
      </Card>
      </div>
    );
  
}
