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

export function callRestPost2(key,urlParams,data){    

    const url = getUrlParamList(key,urlParams);

    return axios({
        method:'POST',
        url:url,
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            "Content-Type": ["application/json","text/plain;charset=UTF8"],
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":"DELETE,GET,POST,PUT,OPTIONS",
            "Access-Control-Allow-Headers":"Authorization,Content-Type,Pragma,Cache-Control",
            "Access-Control-Max-Age":"3600",
        },
        referrerPolicy: 'no-referrer', 
        redirect: 'follow', 
        credentials: 'same-origin', 
        body:JSON.stringify(data)

    });
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
        .then(response=>{
            try{
            const res = response.json();
            return res;
            }
            catch(e){
                console.log('UTILS,err',e);
            }
        })
        .catch(err=>{
            reject({error:err})
        });

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
