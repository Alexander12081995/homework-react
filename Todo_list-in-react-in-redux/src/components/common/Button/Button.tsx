import {FC, PropsWithChildren} from 'react';

interface ButtonProps {
    onClick: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> =
    ({children, onClick}) =>
        <button onClick={onClick}>{children}</button>
