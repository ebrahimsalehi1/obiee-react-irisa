
import translationEn from '../../public/locales/en/translation.json';
import translationFa from '../../public/locales/fa/translation.json';

export function getText(keyStr){

    const lang = localStorage.getItem('language');

    const result =  lang==='en' ? translationEn.filter(item=>item.str===keyStr).map(item=>item.val): translationFa.filter(item=>item.str===keyStr).map(item=>item.val);
    return String(result[0]);
}
