
import {callRestPost} from '../utils/Utils';
import {inspectErrors} from './ErrorHandling';

export async function login(data){

    const result = {data:null,error:null};
    await callRestPost('LOGIN',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

