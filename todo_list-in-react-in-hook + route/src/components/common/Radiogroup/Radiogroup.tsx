import {FC } from 'react';
import css from './radioroup.module.css'

interface RadiogroupProps {
    items: {id: string, label: string, value: string}[];
    name: string;
    value: string;
    onChange: (filter: string) => void;
    className?: string;
}

export const Radiogroup: FC<RadiogroupProps> = (props) => {
    return (
        <div  className={ css.radiogroups }>
            {props.items.map((item) => (
                <div key={item.id}  className={ css.radiogroup }>
                    <input
                    type='radio'
                    id={item.id}
                    name = {props.name}
                    value = {item.value}
                    checked={item.value === props.value}
                    onChange = {()=>props.onChange(item.value)}
                    />
                    <label htmlFor={item.id}>{item.label}</label>
                </div>
            ))}
        </div>
    )
}
