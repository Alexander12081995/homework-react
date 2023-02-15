import {FC, ChangeEvent} from 'react';

interface CheckboxProps {
    checked: boolean
}

export const Checkbox: FC<CheckboxProps> =
    ({checked}) =>
        <input type={'checkbox'} checked={checked}/>