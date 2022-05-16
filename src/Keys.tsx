import { useState } from 'react';
import { IItem } from './index';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    if (props.sorting === 'ASC') {
        props.initialData.sort((data1, data2) => data1.id - data2.id);
    } else if (props.sorting === 'DESC') {
        props.initialData.sort((data1, data2) => data2.id - data1.id);
    }

    return (
        <ol>
            {props.initialData.map((item) => {
                if (item.id !== id) {
                    return (
                        <li
                            onClick={() => {
                                setId(item.id);
                            }}
                            key={item.id}
                        >
                            {item.name}
                        </li>
                    );
                } else {
                    return (
                        <input
                            autoFocus={true}
                            key={item.id}
                            defaultValue={item.name}
                            onKeyDown={(input) => {
                                if (input.key === 'Escape') {
                                    setId(0);
                                } else if (input.key === 'Enter') {
                                    item.name = name;
                                    setId(0);
                                }
                            }}
                            onChange={(value) => {
                                setName(value.currentTarget.value);
                            }}
                        />
                    );
                }
            })}
        </ol>
    );
}
