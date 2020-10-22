
import {callRestPost} from '../utils/Utils';
import {inspectErrors} from './ErrorHandling';

export async function login(userName,password){

    const result = {data:null,error:null};
    await callRestPost('LOGIN',null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

