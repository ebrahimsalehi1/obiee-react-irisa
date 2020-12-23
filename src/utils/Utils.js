import axios from 'axios';

import translationEn from '../../public/locales/en/translation.json';
import translationFa from '../../public/locales/fa/translation.json';
import webservices from '../../public/webservices.json';

import jsonData from '../../db.json';

export function getConfigData(key1,key2){
    const configVal = localStorage.getItem('config');
    if(configVal){
        return key2 ? JSON.parse(configVal)[key1][key2] : JSON.parse(configVal)[key1];
    }

    return null;    
}

export function getText(keyStr){

    //const lang = localStorage.getItem('language');
    const lang = getConfigData('language');

    const result =  lang==='en' ? translationEn.filter(item=>item.str===keyStr).map(item=>item.val): translationFa.filter(item=>item.str===keyStr).map(item=>item.val);
    return String(result[0]);
}

// export function getTitle(){
//     return localStorage.getItem('title');
// }

// export function setTitle(title){
//     return localStorage.setItem('title',title);
// }

function getUrlByKey(key){
    //return JSON.parse(localStorage.getItem("webservices")).filter(item=>item.name===key)[0]['bffUrl'].replace(":0",config.host);    
    return webservices.filter(item=>item.name===key)[0]['bffUrl'].replace(":0",getConfigData('host'));
}

function getUrlParamList(key,urlParams){

    let url = new String(getUrlByKey(key));
    
    if(urlParams===null || urlParams===undefined || urlParams.length===0)
        return url;

    let i = 0;
    urlParams.forEach(param => {
        i++;
        url=url.replace(':'+i,param);
    });

    return url;
}

export async function callRestPost2(key,urlParams,data){    

    const url = getUrlParamList(key,urlParams);

    return await fetch(url,{
            method:'POST',
            //mode: 'cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":"DELETE,GET,POST,PUT,OPTIONS",
                "Access-Control-Allow-Headers":"Authorization,Content-Type,Pragma,Cache-Control",
                "Access-Control-Max-Age":"3600",
            },
            referrerPolicy: 'no-referrer', 
            redirect: 'follow', 
            credentials: 'same-origin',         
            body:JSON.stringify(data)
        })
        .then(response=>response.json());
}

export async function callRestPost(key,urlParams,data){        
   
    if(getConfigData('serviceType')==='file'){

        return new Promise((resolve,reject)=>{
            const foundData = jsonData[key];
            if(foundData)
                resolve({data:foundData,status:200})
            else
                setTimeout(()=>{
                    resolve({data:"OK",status:200});
                },2000);    
        });
    }
    
    const url = getUrlParamList(key,urlParams);

    return await axios({
            url:url,
            method:'POST',
            //mode: 'cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":"DELETE,GET,POST,PUT,OPTIONS",
                "Access-Control-Allow-Headers":"Authorization,Content-Type,Pragma,Cache-Control",
                "Access-Control-Max-Age":"3600",
            },
            referrerPolicy: 'no-referrer', 
            redirect: 'follow', 
            credentials: 'same-origin',         
            data:data
        });
}

export async function callRestPut(key,urlParams,data){    

    if(getConfigData('serviceType')==='file'){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({data:"Ok",status:200});
            },2000);    
        });
    }

    const url = getUrlParamList(key,urlParams);

    return await axios({
            url:url,
            method:'PUT',
            //mode: 'cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":"DELETE,GET,POST,PUT,OPTIONS",
                "Access-Control-Allow-Headers":"Authorization,Content-Type,Pragma,Cache-Control",
                "Access-Control-Max-Age":"3600",
            },
            referrerPolicy: 'no-referrer', 
            redirect: 'follow', 
            credentials: 'same-origin',         
            data:data
        });
}

export async function callRestDelete(key,urlParams,data){    

    if(getConfigData('serviceType')==='file'){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({data:"Ok",status:200});
            },2000);    
        });
    }

    const url = getUrlParamList(key,urlParams);

    return await axios({
            url:url,
            method:'DELETE',
            //mode: 'cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":"DELETE,GET,POST,PUT,OPTIONS",
                "Access-Control-Allow-Headers":"Authorization,Content-Type,Pragma,Cache-Control",
                "Access-Control-Max-Age":"3600",
            },
            referrerPolicy: 'no-referrer', 
            redirect: 'follow', 
            credentials: 'same-origin',         
            data:data
        });
}

export async function callRestGet(key,urlParams){    

    if(getConfigData('serviceType')==='file'){

        return new Promise((resolve,reject)=>{
            const foundData = jsonData[key];

            if(foundData)
                resolve({data:foundData,status:200})
            else
                resolve({data:"OK",status:200})    
        });
    }

    const url = getUrlParamList(key,urlParams);

    // return fetch(url,{
    //     method:'GET',
    //     //mode: 'cors',
    //     headers: {
    //         'Accept': 'application/json',
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods":"DELETE,GET,POST,PUT,OPTIONS",
    //         "Access-Control-Allow-Headers":"Authorization,Content-Type,Pragma,Cache-Control",
    //         "Access-Control-Max-Age":"3600",
    //     }

    // })
    // .then(response=>response.json());

    return await axios({
        url:url,        
        method:'GET',
        //mode: 'cors',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":"DELETE,GET,POST,PUT,OPTIONS",
            "Access-Control-Allow-Headers":"Authorization,Content-Type,Pragma,Cache-Control",
            "Access-Control-Max-Age":"3600",
        }});
    
}

export function addToList(data,newData){

    let mdata;

    if(newData && newData.id){
        let max = 0;
        data.forEach(item => {
        if (item.id > max) {
            max = item.id;
        }
        });

        mdata = [...data,{...newData,id:max+1,parentId:null}];
    }
    else{
        mdata = [...data,newData];
    }

    return mdata;
}

export function updateList(data,oldData,newData){

    let mdata = [...data];

    try{
        const foundedIndex = mdata.indexOf(oldData);

        if(foundedIndex!==undefined && foundedIndex>=0){
            mdata.splice(foundedIndex,1,newData);      
        }
        else{
            mdata = [];   
        }
    }
    catch(err){
        mdata = [];  
    }
    
    return mdata;
}

export function deleteFromList(data,oldData){

    let dataDelete = [...data];
    try{
        // tableData , childRows
        if(!oldData.tableData.childRows)
        {
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);

        }
        else{
            dataDelete = [];
        }
    }
    catch(e){
        dataDelete = [];
    }    
        
    return dataDelete;
}

export function hasSystemFeatures(feature){
    const res = getConfigData('features').filter(item=>{
        return item[feature];        
    });

    return  res && res.length>0;
}

export function getBIUrl(type,path,user){
    let url = '';

    switch(type){
        case 'REPORT_TRANSACTIONAL':
            url += getConfigData('urlBIPublisher')+encodeURIComponent(path)+'&impersonate='+user+'&nqUser=biviewer&nqPassword=biviewer12c';
            break;
        case 'REPORT_DASHBOARD':
            url += getConfigData('urlBIAnalytics')+encodeURIComponent(path)+'&impersonate='+user+'&nqUser=biviewer&nqPassword=biviewer12c';
            break;
        case 'REPORT_ANALYSER':
            url += getConfigData('urlBIVisualAnalyser')+encodeURIComponent(path)+'&impersonate='+user+'&nqUser=biviewer&nqPassword=biviewer12c';
            break;            
    }

    return url;

}


export function biLogin(key,impersonate,biuser,bipasswd) {

    let url = getConfigData('urlBIVisualAnalyser');

       var popup = 
 window.open    
 (url,"_blank","width=" + screen.width + ", height=" + screen.height,false);
        
        popup.onload=function () {
           console.log('this is a test for visual analyser-step 1');
        alert(1)
   loginForm = popup.document.   getElementsByClassName('bitech-login-form')[0];
        loginForm.action = url + '&impersonate='+ impersonate;
        popup.document.getElementById('idUser').value = biuser;
        popup.document.getElementById('idPassword').value = bipasswd;
        loginForm.submit();
   
     }

//  popup.addEventListener('load', function () {
//           console.log('this is a test for visual analyser-step 1');
//           alert(1)
//  loginForm = popup.document.getElementsByClassName('bitech-login-form')[0];
//        loginForm.action = url + '&impersonate='+ impersonate;
//        popup.document.getElementById('idUser').value = biuser;
//        popup.document.getElementById('idPassword').value = bipasswd;
//        loginForm.submit();
 
//     });
 
}

export async function readFile(url){

    let result = null;
    await fetch(url,{
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(response=>
        {
            console.log("response",response);
            return response.json();
        })
    .then(data=>
        {
            console.log(data);
            result = data;
        }
        )
    .catch(err=>{
        console.log("err",err);
    })

    return result;
} 

