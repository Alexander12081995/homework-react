import {FC, PropsWithChildren} from "react";
import css from './button.module.css';

interface ButtonProps {
    className?: string;
    onClick: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({className,children, onClick}) => <button
    onClick={onClick} className={css.btn}>{children}</button>
