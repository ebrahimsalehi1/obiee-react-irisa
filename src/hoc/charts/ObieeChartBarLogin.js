import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import {loginStatisticData} from '../../webservice/Statistic';

export default function ObieeChartBarLogin(props)  {

  const {title} = props;

    const [loginData, setLoginData] = React.useState([]);
    const [showmessage,setShowmessage] = React.useState('');

    React.useEffect(()=>{

        async function fetchData(){
            const result = await loginStatisticData();

            if(result.error){
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
