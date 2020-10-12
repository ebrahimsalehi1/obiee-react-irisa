import axios from 'axios';

import translationEn from '../../public/locales/en/translation.json';
import translationFa from '../../public/locales/fa/translation.json';

export function getText(keyStr){

    const lang = localStorage.getItem('language');

    const result =  lang==='en' ? translationEn.filter(item=>item.str===keyStr).map(item=>item.val): translationFa.filter(item=>item.str===keyStr).map(item=>item.val);
    return String(result[0]);
}

export function getTitle(){
    return localStorage.getItem('title');
}

export function setTitle(title){
    return localStorage.setItem('title',title);
}

function getUrlByKey(key){
    return JSON.parse(localStorage.getItem("webservices")).filter(item=>item.name===key)[0]['bffUrl'];    
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

export async function callRestPost(key,urlParams,data){    

    const url = getUrlParamList(key,urlParams);

    console.log('callRestPost url',url);

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

export async function callRestPut(key,urlParams,data){    

    const url = getUrlParamList(key,urlParams);

    console.log('callRestPut url',url);

    return await fetch(url,{
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
            body:JSON.stringify(data)
        })
        .then(response=>response.json());    
}

export async function callRestDelete(key,urlParams,data){    

    const url = getUrlParamList(key,urlParams);

    console.log('callRestDelete url',url);

    return await fetch(url,{
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
            body:JSON.stringify(data)
        })
        .then(response=>response.json());    
}

export function callRestGet(key,urlParams){    

    const url = getUrlParamList(key,urlParams);

    return fetch(url,{
        method:'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":"DELETE,GET,POST,PUT,OPTIONS",
            "Access-Control-Allow-Headers":"Authorization,Content-Type,Pragma,Cache-Control",
            "Access-Control-Max-Age":"3600",
        }

    })
    .then(response=>response.json());
}
