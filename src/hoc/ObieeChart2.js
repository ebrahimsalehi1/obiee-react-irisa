import React, {useEffect, useState} from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
    AreaChart, Area, ResponsiveContainer,
} from 'recharts';
import {Card} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FetchSign from "../../config/FetchSign";
import { BPMS_URL} from "../../config/constants";

export default function ObieeChart2() {
    const [tasks, setTasks]=useState([]);
    useEffect(()=>{
        let userName = localStorage.getItem("userToken");
        let url = `${BPMS_URL}/getYearlyTaskReportByLog/${userName}/`
        FetchSign.readApi({url: url}).then(res => {
            if(res){
                if(res.status===200){
                    console.log("yearly tasks", res.data)
                    setTasks(res.data);
                }
            }
        })
    },[])

    return (
        <Grid md={9} xs={12} item>
            <Card style={{margin: '12px', display: 'flex', padding: '12px 30px 12px 0px'}}>
                <Grid xs={12} spacing={0}>
                    <h6 style={{margin: '0px'}}>تسک های تخصیص داده شده در سال</h6>
                    <ResponsiveContainer width='100%' height={250}>
                        <LineChart
                            data={tasks}
                            syncId="anyId"
                            margin={{
                                top: 30, right: 10, left: 0, bottom: 0,
                            }}
                            fontSize={'10px'}
                        >
                            <XAxis dataKey="Month" padding={{left: 40, right: 40}}/>
                            <YAxis domain={[0, 300]}/>
                            <CartesianGrid strokeDasharray="3 2"/>
                            <Line type="monotone" dataKey="count" stroke="#5850EC"  strokeWidth={3}/>
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>

            </Card>
        </Grid>
    );
}