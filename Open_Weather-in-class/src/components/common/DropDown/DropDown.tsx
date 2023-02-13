import { FC, ChangeEvent } from 'react';
import css from './dropDown.module.css';

interface DropDownProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: {value: string, label: string}[];
    calassName: string;
}

export const DropDown: FC<DropDownProps> = ({ value, onChange, options, calassName }) => {
    return (
        <select className = { css.dropDown } value={ value } onChange = { onChange }>
            {options.map(({ value, label }) => (
                <option value={ value } key = { value }>
                    { label }
                </option>
            ) )}
        </select>
    )
}
