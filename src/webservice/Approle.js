
import {callRestPost,callRestGet,callRestPut,callRestDelete} from '../utils/Utils';
import {inspectErrors} from './ErrorHandling';

export async function appRoleAll(){

    const result = {data:null,error:null};
    await callRestGet('APPROLE_ALL',null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function approleCreate(data){
    const result = {data:null,error:null};
    await callRestPost('APPROLE_CREATE',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function approleEdit(data){
    const result = {data:null,error:null};
    await callRestPut('APPROLE_EDIT',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function approleDelete(roleName){
    const result = {data:null,error:null};
    await callRestDelete('APPROLE_DELETE',[roleName],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function getListUsersOfRole(roleName){
    const result = {data:null,error:null};
    await callRestGet('APPROLE_LIST_USERS_OF_ROLE',[roleName],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function approleAssignToRole(roleName,user){
    const result = {data:null,error:null};
    await callRestPut('APPROLE_ASSIGN_USER_TO_ROLE',[roleName,user],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

