import { FC, ChangeEvent } from 'react';
import css from './dropDown.module.css';

interface DropDownProps {
    value: string;
    onChange: (value: string, e: ChangeEvent<HTMLSelectElement>) => void;
    options: {value: string, label: string}[];
    className?: string;
}

export const DropDown: FC<DropDownProps> =
    ({ value, onChange, options, className }) =>
    {return (
        <select className = { css.dropDown } value={ value } onChange = {(e) => onChange(e.target.value, e) }>
            {options.map(({ value, label }) => (
                <option value={ value } key = { value }>
                    { label }
                </option>
            ) )}
        </select>
    )}
