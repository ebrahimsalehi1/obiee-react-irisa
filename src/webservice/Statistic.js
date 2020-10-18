
import {callRestGet} from '../utils/Utils';

export async function loginStatisticData(){

    const result = {data:null,errorPersian:null,errorLatin:null,errorMessage:null};
    await callRestGet('STATISTIC_LOGIN',null)
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

export async function analyticStatisticData(){

    const result = {data:null,errorPersian:null,errorLatin:null,errorMessage:null};
    await callRestGet('STATISTIC_ANALYTIC',null)
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

export async function visualAnalyserStatisticData(){

    const result = {data:null,errorPersian:null,errorLatin:null,errorMessage:null};
    await callRestGet('STATISTIC_VISUALANALYSER',null)
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

export async function biPublisherStatisticData(){

    const result = {data:null,errorPersian:null,errorLatin:null,errorMessage:null};
    await callRestGet('STATISTIC_BIPUBLISHER',null)
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

export async function dashboardStatisticData(){

    const result = {data:null,errorPersian:null,errorLatin:null,errorMessage:null};
    await callRestGet('STATISTIC_DASHBOARD',null)
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
