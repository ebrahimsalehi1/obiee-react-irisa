import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
    AreaChart, Area, ResponsiveContainer,
} from 'recharts';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import {ANALYTIC,VISUAL_ANALYSER,BI_PUBLISHER} from '../utils/Constants';
import {analyticStatisticData,visualAnalyserStatisticData,biPublisherStatisticData} from '../webservice/Statistic';

export default function ObieeChartMonthlyByType(props) {

    const {type,title} = props;

    const [data, setData] = React.useState([]);
    const [showmessage,setShowmessage] = React.useState('');

    React.useEffect(()=>{
        async function fetchData(){
            let result;
            
            switch(type){
                case ANALYTIC:
                    result = await analyticStatisticData();
                    break;
                case VISUAL_ANALYSER:
                    result = await visualAnalyserStatisticData();
                    break;
                case BI_PUBLISHER:
                    result = await biPublisherStatisticData();
                    break;
                default:
                    break;
            }

            if(result.errorMessage){
                setShowmessage(result.errorPersian+"\n"+result.errorLatin);
            }
            else{
                setData(result.data);
            }
        }
        fetchData();   
    },[]);     

    return (
    <div>
        <Typography variant="caption" >{title}</Typography>
        <Card style={{margin: '0px', display: 'flex', padding: '0px',width:'250',height:'150'}}>
                <ResponsiveContainer width={250} height={150}>
                    <LineChart
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 30, right: 10, left: 0, bottom: 0,
                        }}
                        fontSize={'10px'}
                    >
                        {/* <XAxis dataKey="month" padding={{left: 40, right: 40}} /> */}
                        {/* <YAxis domain={[0, 3000]}/> */}
                        {/* <CartesianGrid strokeDasharray="3 3"/> */}
                        <Line type="linear" dataKey="count" stroke="#5850EC" strokeWidth={3}/>
                        <Tooltip>a</Tooltip>
                    </LineChart>
                </ResponsiveContainer>
        </Card>
    </div>
    );
}
