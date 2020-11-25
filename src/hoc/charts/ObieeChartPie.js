import React from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import {dashboardStatisticData} from '../../webservice/Statistic';
import {UserContext} from '../../Context';

export default function ObieeChartPie(props) {

    const {type,title} = props;

    const [data, setData] = React.useState([]);
    const [state,setState]= React.useState( {activeIndex: 0,name:''});
    const [sumData,setSumData] = React.useState(0);

    const context = React.useContext(UserContext);

    React.useEffect(()=>{
        async function fetchData(){

          context.obieeDispatch({type:'show_loading'});

          let result = await dashboardStatisticData();

          if(result.error){
              //setShowmessage(result.errorPersian+"\n"+result.errorLatin);
              context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+"\n"+result.error.errorLatin}});
          }
          else{
              setData(result.data);
              setSumData(result.data.reduce((acc,item)=>item.value+acc,0));
          }

          context.obieeDispatch({type:'hide_loading'});

        }
        fetchData();   
    },[]);     

  const onPieEnter = (data, index) => {
    setState({
      activeIndex: index,name:data.name
    });
  };

  function renderActiveShape (props) {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{String(sumData)}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${state.name}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text> 
      </g>
    );
  };
  
    return (
      <PieChart width={500} height={300} style={{margin:0,padding:0,align:'center'}}>
        <Pie
          activeIndex={state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={250}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    );
  
}
