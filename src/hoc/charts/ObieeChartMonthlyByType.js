import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
    AreaChart, Area, ResponsiveContainer,
} from 'recharts';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import {ANALYTIC,VISUAL_ANALYSER,BI_PUBLISHER} from '../../utils/Constants';
import {analyticStatisticData,visualAnalyserStatisticData,biPublisherStatisticData} from '../../webservice/Statistic';
import Grid from '@material-ui/core/Grid';
import {UserContext} from '../../Context';

export default function ObieeChartMonthlyByType(props) {

    const {type,title} = props;

    const [data, setData] = React.useState([]);

    const context = React.useContext(UserContext);

    React.useEffect(()=>{


        async function fetchData(){
            context.obieeDispatch({type:'show_loading'});

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

            if(result.error){
                //setShowmessage(result.errorPersian+"\n"+result.errorLatin);
                context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+"\n"+result.error.errorLatin}});
            }
            else{
                setData(result.data);
            }

            context.obieeDispatch({type:'hide_loading'});
        }
        fetchData();   
    },[]);     

    return (
        <Card style={{margin: '0px', display: 'flex', padding: '0px'}}>
        <Grid spacing={0}             
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"      
        style={{padding:0,margin:0}}       
        >
        <Grid item xs={12} md={12}>
        <Typography variant="caption" style={{textAlign:'center'}}>{title}</Typography>
        </Grid>
        <Grid item xs={12} md={12} style={{width:'250px',height:'150px'}}>
                <ResponsiveContainer >
                    <LineChart
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 30, right: 10, left: 0, bottom: 0,
                        }}
                        fontSize={'10px'}
                    >
                        <XAxis dataKey="month" padding={{left: 40, right: 40}} hide/>
                        {/* <YAxis domain={[0, 3000]}/> */}
                        {/* <CartesianGrid strokeDasharray="3 3"/> */}
                        <Line type="linear" dataKey="count" stroke="#5850EC" strokeWidth={3}/>
                        <Tooltip>a</Tooltip>
                    </LineChart>
                </ResponsiveContainer>
            </Grid>
            </Grid>
        </Card>
    );
}
