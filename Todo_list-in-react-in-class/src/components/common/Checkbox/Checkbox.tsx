import type { FC, ChangeEvent } from 'react';
import css from './checkbox.module.css';

interface CheckboxProps {
    checked: boolean;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement> ) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, className, onChange }) => <input type='checkbox' checked={ checked } onChange = { onChange } className = { css.check } /> 
