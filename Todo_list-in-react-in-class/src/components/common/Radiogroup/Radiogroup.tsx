import { FC } from 'react'; 
import css from './radiogroup.module.css';

interface RadiogroupProps {
    items: { id: string, label: string, value: string}[];
    name: string;
    value: string;
    onChange: (value: string) => void;
}

export const Radiogroup: FC<RadiogroupProps> = ({ items, name, value, onChange }) => {
    return(
        <div className = { css.checkGroups } >
            { items.map((item) => (
                    <div key={ item.id } className = { css.checkGroup  }>
                        <input 
                        type='radio'
                        id={ item.id }
                        name={ name }
                        value={ item.value }
                        checked={ item.value === value } 
                        className = { css.check }
                        onChange = { () => onChange(item.value) }
                    />
                    <label htmlFor={ item.id }>{ item.label }</label>
                    </div>
                
            )) }
        </div>
    );
}
