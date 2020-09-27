
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

export function readFile(url){

    fetch(url,{
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(response=>
        {
            console.log("response",response);
            return response.json();
        })
    .then(data=>{console.log(data)})
    .catch(err=>{
        console.log("err",err);
    })
}