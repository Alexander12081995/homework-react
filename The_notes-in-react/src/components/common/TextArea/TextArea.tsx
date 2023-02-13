import { FC, ChangeEvent } from 'react';
import css from './textArea.module.css';

interface TextAreaProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
}

export const TextArea: FC<TextAreaProps> = ({className, value, onChange}) => <textarea className={css.textArea} onChange={onChange} value={value}></textarea>
