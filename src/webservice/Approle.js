
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

export async function approleAssignUserToRole(roleName,user){

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

export async function approleDeleteUserFromRole(roleName,user){

    const result = {data:null,error:null};
    await callRestPut('APPROLE_DELETE_USER_FROM_ROLE',[roleName,user],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function getListRolesOfRole(roleName){
    const result = {data:null,error:null};
    await callRestGet('APPROLE_LIST_APPROLE',[roleName],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function getListGroupsOfRole(roleName){
    const result = {data:null,error:null};
    await callRestGet('APPROLE_LIST_GROUP',[roleName],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function approleAssignRoleToRole(parenRoleName,childRoleName){

    const result = {data:null,error:null};
    await callRestPut('APPROLE_ASSIGN_TO_ROLE',[parenRoleName,childRoleName],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function approleRemoveRoleFromRole(parenRoleName,childRoleName){

    const result = {data:null,error:null};
    await callRestPut('APPROLE_REMOVE_FROM_ROLE',[parenRoleName,childRoleName],null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function approleAssignGroupToRole(data){

    const result = {data:null,error:null};
    await callRestPut('APPROLE_ASSIGN_TO_GROUP',[],data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function approleRemoveGroupFromRole(data){

    const result = {data:null,error:null};
    await callRestPut('APPROLE_REMOVE_FROM_GROUP',[],data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}