
import {callRestPost,callRestGet} from '../utils/Utils';

function appRoleAll(data){
    callRestPost('REPORT_TRANSACTIONAL',null,data)
    .then(res=>{
            
    })
    .catch(err=>{

    });
}