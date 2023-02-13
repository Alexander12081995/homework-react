import type { FC, ChangeEvent } from 'react';
import css from './input.module.css'

interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
     
}

export const Input: FC<InputProps> = ({ value, onChange }) => <input placeholder='Введите задачу' value={ value } onChange = { onChange } className = { css.nameTask } />
