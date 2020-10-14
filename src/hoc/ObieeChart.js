import * as React from 'react';
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    LineChart,
    CartesianGrid,
    XAxis,
    Line,
    YAxis
} from 'recharts';
import {
    useEffect
} from "react";
import {
    useState
} from "react";

export default function ObieeChart(props) {
    const {
        users
    } = props;
    const [user, setUser] = useState([]);
    useEffect(() => {
        let userTemp = [{
                name: 'Page A',
                pv: 0
            },
            {
                name: 'Page A',
                pv: 0
            },
            {
                name: 'Page A',
                pv: 0
            },
            {
                name: 'Page A',
                pv: 0
            },
            {
                name: 'Page A',
                pv: 0
            },
            {
                name: 'Page A',
                pv: 0
            },
            {
                name: 'Page A',
                pv: 0
            },
            {
                name: 'Page A',
                pv: 0
            },
            {
                name: 'Page A',
                pv: 0
            },
            {
                name: 'Page A',
                pv: 0
            }
        ];
        for (let i = 0; i < users.length; i++) {
            let data = {
                name: 'Page A',
                pv: 0
            };
            data.name = "page" + i;
            data.pv = users[i];
            userTemp.push(data);
        }
        setUser(userTemp);
    }, [users])
    return ( <
        ResponsiveContainer width = '95%'
        height = {
            230
        } >
        <
        BarChart data = {
            user.slice(user.length - 11, user.length)
        }
        barSize = {
            10
        }
        barCategoryGap = {
            2
        } >
        <
        Bar dataKey = "pv"
        fill = "#5850EC" / >
        </BarChart>          
        </ResponsiveContainer>     
    );
}