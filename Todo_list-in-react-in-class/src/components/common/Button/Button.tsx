import type { FC, PropsWithChildren } from 'react';
import css from './btn.module.css';
import cn from 'classnames';

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children, onClick, disabled, className}) => 
    <button onClick={ onClick } disabled={ disabled } className = { cn(css.btn, className) } >{ children }</button>
 