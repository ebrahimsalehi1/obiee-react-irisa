import React from 'react';
import {UserContext} from '../Context';

export function showLoading(){
    const context = React.useContext(UserContext);
    context.obieeDispatch('show_loading');
}
