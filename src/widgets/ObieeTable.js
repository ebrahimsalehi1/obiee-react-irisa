import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {callRestPost} from '../utils/Utils';
import {UserContext} from '../Context';

export default function DataGridDemo(props) {

  const {rows,columns,urlName} = props;

  const [prows,setProws] = React.useState([]);

  const context = React.useContext(UserContext);

  const urlStart = 'http://172.25.40.135:9502/analytics/saw.dll?Portal&PortalPath=';

  React.useEffect( ()=>{

    if(urlName){
      context.obieeDispatch({type:'show_loading'});

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

      const user = localStorage.getItem('user');

      callRestPost(url,[],{
          "user": user,
          "searchWord":""
      })
      .then(res=>{
        console.log("ObieeTable data",res);
        setProws(res.data);

        context.obieeDispatch({type:'hide_loading'});
      })
      .catch(err=>{
        context.obieeDispatch({type:'hide_loading'});
        context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:'Error occured'}});
        //context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+"\n"+result.error.errorLatin}});
        //console.log('ObieeTable err',err);
      });
    }

  },[]);


  return (
    <div style={{ height: 385, width: '100%' }}>
      <DataGrid 
        rows={rows ? rows : prows} 
        columns={columns} 
        pageSize={5}  
        onRowClick={(rowParams) =>{
          console.log(rowParams.data.path);
          window.open(urlStart+rowParams.data.path, "_blank");
        }}
        />
      {/* {
        prows.length>0 &&
        prows.map(item=><div key={item.cation}><p key={item.cation}>{item.caption}</p></div>)
      } */}
    </div>

  );
}


