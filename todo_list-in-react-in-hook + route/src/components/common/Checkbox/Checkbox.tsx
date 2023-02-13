import {ChangeEvent, FC} from 'react';
import css from './checkbox.module.css';

interface CheckboxProps {
    checked: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const Checkbox: FC<CheckboxProps> = (props) => <input type='checkbox' checked={props.checked}
                                                             className={css.checkbox}
                                                             onChange={props.onChange}/>
