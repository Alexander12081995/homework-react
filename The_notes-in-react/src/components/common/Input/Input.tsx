import {FC, ChangeEvent} from 'react';
import css from './input.module.css';

interface InputProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    placeholder?: string
}

export const Input: FC<InputProps> = ({className, placeholder, value, onChange}) => <input placeholder={placeholder} className={css.input} value={value}
                                                                              onChange={onChange}/>
