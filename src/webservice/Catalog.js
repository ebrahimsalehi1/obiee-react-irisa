
import {callRestPost,callRestGet,callRestPut,callRestDelete} from '../utils/Utils';
import {inspectErrors} from './ErrorHandling';

export async function tree(data){

    const result = {data:null,error:null};
    await callRestPost('CATALOG_TREE',[],data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function permissionFull(data){
    const result = {data:null,error:null};
    await callRestPut('CATALOG_PERMISSION_FULL',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function permissionNoAccess(data){
    const result = {data:null,error:null};
    await callRestPut('CATALOG_PERMISSION_NO_ACCESS',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function permissionModify(data){
    const result = {data:null,error:null};
    await callRestPut('CATALOG_PERMISSION_MODIFY',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function permissionOpen(data){
    const result = {data:null,error:null};
    await callRestPut('CATALOG_PERMISSION_OPEN',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function permissionViewReportOutput(data){
    const result = {data:null,error:null};
    await callRestPut('CATALOG_PERMISSION_VIEW_REPORT_OUTPUT',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function permissionScheduleReport(data){
    const result = {data:null,error:null};
    await callRestPut('CATALOG_PERMISSION_SCHEDULE_REPORT',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function permissionCustom(data){
    const result = {data:null,error:null};
    await callRestPut('CATALOG_PERMISSION_CUSTOM',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function deletePermission(data){
    const result = {data:null,error:null};
    await callRestDelete('CATALOG_PERMISSION_DELETE',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function getRolePermission(data){
    const result = {data:null,error:null};
    await callRestPost('CATALOG_PERMISSION_ROLE',null,data)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}
