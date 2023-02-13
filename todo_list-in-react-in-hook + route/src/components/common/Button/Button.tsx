import {FC, PropsWithChildren} from 'react';
import css from './button.module.css';

interface ButtonProps {
    onClick: () => void;
    className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => <button
    onClick={props.onClick} className={ css.btn }>{props.children}</button>
