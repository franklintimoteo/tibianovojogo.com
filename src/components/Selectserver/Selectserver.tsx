import './style.scss';

import { SelectHTMLAttributes } from 'react';


type Selectprops = SelectHTMLAttributes<HTMLSelectElement>;//ButtonHTMLAttributes<HTMLButtonElement>;

export function Selectserver(props: Selectprops){
    return (
        <select {...props}>
        </select>
    )
}