
import {callRestGet} from '../utils/Utils';
import {inspectErrors} from './ErrorHandling';

export async function getUserInfo(user){

    const result = {data:null,error:null};
    await callRestGet('USER_INFO',[user],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function getUserAll(user){

    const result = {data:null,error:null};
    await callRestGet('USER_ALL',[user],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function getUserSearch(searchCondition){

    const result = {data:null,error:null};
    await callRestGet('USER_SEARCH',[searchCondition],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function hasAdminRole(user){

    const result = {data:null,error:null};
    await callRestGet('APPROLE_HAS_ADMIN_ROLE',[user],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}


