import { useState } from 'react';

// Stateful component

export default (initialValue)=>{
    const [text,setText] = useState(initialValue);

    return({
        text,
        onChangeHandle : (text)=>{
            setText(text);
        },
        reset : ()=>{
            setText('');
        },
    })
}