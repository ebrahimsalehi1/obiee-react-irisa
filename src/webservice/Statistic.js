
import {callRestGet} from '../utils/Utils';
import {inspectErrors} from './ErrorHandling';

export async function loginStatisticData(){

    const result = {data:null,error:null};
    await callRestGet('STATISTIC_LOGIN',null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function analyticStatisticData(){

    const result = {data:null,error:null};
    await callRestGet('STATISTIC_ANALYTIC',null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function visualAnalyserStatisticData(){

    const result = {data:null,error:null};
    await callRestGet('STATISTIC_VISUALANALYSER',null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function biPublisherStatisticData(){

    const result = {data:null,error:null};
    await callRestGet('STATISTIC_BIPUBLISHER',null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}

export async function dashboardStatisticData(){

    const result = {data:null,error:null};
    await callRestGet('STATISTIC_DASHBOARD',null)
    .then(res=>{
         result.data = res.data;   
    })
    .catch(err=>{
        result.error = inspectErrors(err);
    });

    return result;
}
