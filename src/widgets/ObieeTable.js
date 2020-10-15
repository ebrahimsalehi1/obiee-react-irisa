import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {callRestPost} from '../utils/Utils';

export default function DataGridDemo(props) {
  const {rows,columns,urlName} = props;

  const [prows,setProws] = React.useState([]);

  React.useEffect( ()=>{

    if(urlName){

      let url;
      switch(urlName){
        case 'show_dashboard_transactional':
          url = 'REPORT_TRANSACTIONAL';
          break;
        case 'show_dashboard_analyser':
          url = 'REPORT_DASHBOARD';
          break;
        case 'show_dashboard_dashboard':
          url = 'REPORT_ANALYSER';
          break;
        default:
      }

      console.log('urlName',urlName);
      const user = localStorage.getItem('user');

      callRestPost(url,[],{
          "user": user,
          "searchWord":""
      })
      .then(res=>{
        console.log("ObieeTable data",res);
        setProws(res);
      })
      .catch(err=>{
        console.log('ObieeTable err',err);
      });
    }

  },[]);


  return (
    <div style={{ height: 385, width: '100%' }}>
      <DataGrid rows={rows ? rows : prows} columns={columns} pageSize={5}  />
      {/* {
        prows.length>0 &&
        prows.map(item=><div key={item.cation}><p key={item.cation}>{item.caption}</p></div>)
      } */}
    </div>

  );
}

// rows ? rows:prows
// checkboxSelection


  //   switch(urlName){
  //     case 'REPORT_TRANSACTIONAL':  
                                        
  //         break;  
  //     case 'REPORT_ANALYSER':
  //         break;
  //     case 'REPORT_DASHBOARD':
  //         break;
  //     default:
          
  // }
