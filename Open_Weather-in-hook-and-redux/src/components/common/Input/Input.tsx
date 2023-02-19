import { FC, ChangeEvent } from 'react';
import css from './input.module.css';

interface InputProps {
    value: string;
    onChange:  (value: string,e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
} 

export const Input: FC<InputProps> =
    ({ value, onChange }) =>
        <input className = { css.input } value={ value } onChange={(e) => onChange(e.target.value, e)}></input>
