
import {callRestPost,callRestGet,callRestPut,callRestDelete} from '../utils/Utils';

export async function appRoleAll(){

    const result = {data:null,errorPersian:null,errorLatin:null,errorMessage:null};
    await callRestGet('APPROLE_ALL',null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.errorPersian = err.response.data[0].persianMessage;
        result.errorLatin = err.response.data[0].latinMessage;
        result.errorMessage = err.response.data[0].errorMessage;
    });

    return result;
}

export async function approleCreate(data){
    const result = {data:null,errorPersian:null,errorLatin:null,errorMessage:null};
    await callRestPost('APPROLE_CREATE',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.errorPersian = err.response.data[0].persianMessage;
        result.errorLatin = err.response.data[0].latinMessage;
        result.errorMessage = err.response.data[0].errorMessage;
    });

    return result;
}

export async function approleEdit(data){
    const result = {data:null,errorPersian:null,errorLatin:null,errorMessage:null};
    await callRestPut('APPROLE_EDIT',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.errorPersian = err.response.data[0].persianMessage;
        result.errorLatin = err.response.data[0].latinMessage;
        result.errorMessage = err.response.data[0].errorMessage;
    });

    return result;
}

export async function approleDelete(roleName){
    const result = {data:null,errorPersian:null,errorLatin:null,errorMessage:null};
    await callRestPut('APPROLE_DELETE',[roleName],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.errorPersian = err.response.data[0].persianMessage;
        result.errorLatin = err.response.data[0].latinMessage;
        result.errorMessage = err.response.data[0].errorMessage;
    });

    return result;
}
