import {FC, Fragment, ChangeEvent} from "react";

interface RadiogroupProps {
    items: { id: string, label: string, value: string }[],
    name: string;
    value: string;
    onChange: (filter: string) => void;
}

export const Radiogroup: FC<RadiogroupProps> =
    ({items, name, value, onChange}) => {
        return (
            <div>
                {items.map((item) => (
                    <Fragment key={item.id}>
                        <input type={'radio'}
                               id={item.id}
                               name={name}
                               value={item.value}
                               checked={item.value === value}
                               onChange={() => onChange(item.value)}
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                    </Fragment>
                ))}
            </div>
        )
    }
