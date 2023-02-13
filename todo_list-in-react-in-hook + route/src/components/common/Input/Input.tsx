import {FC, ChangeEvent} from 'react';
import css from './input.module.css';

interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    placeholder?: string;
}

export const Input: FC<InputProps> = (props) => <input value={props.value}
                                                       className={ css.input }
                                                       placeholder={ props.placeholder }
                                                       onChange={props.onChange}/>
