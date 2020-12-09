
import {callRestGet} from '../utils/Utils';
import {inspectErrors} from './ErrorHandling';

export async function getGroupAll(){

    const result = {data:null,error:null};
    await callRestGet('GROUP_ALL',null,null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}
