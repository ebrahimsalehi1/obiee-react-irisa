import React from 'react';

import translationEn from '../../public/locales/en/translation.json';
import translationFa from '../../public/locales/fa/translation.json';

export default function Text({keyStr}){

  const lang = localStorage.getItem('language');

  return (
  <div>
  {
    lang==='en' ? String(translationEn.filter(item=>item.str===keyStr).map(item=>item.val)[0]): String(translationFa.filter(item=>item.str===keyStr).map(item=>item.val)[0])
  }
  </div>
  )
}
