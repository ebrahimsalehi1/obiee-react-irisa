
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

export async function isSessionValid(data){

    const result = {data:null,error:null};
    await callRestPost('LOGIN_IS_SESSION_VALID',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function isSessionValid2(data){
    return await callRestPost('LOGIN_IS_SESSION_VALID',null,data);
}


