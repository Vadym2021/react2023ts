import React, {useState} from 'react';
import {Todos} from './Todos';

const UseCallBack = () => {

    const [todos, setTodos] = useState(['newTodo']);
    const [count, setCount] = useState(0);

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <Todos todos={todos}/>
            <div>Count:{count}</div>
            <button onClick={()=>setCount(prevState => ++prevState)}>inc</button>
        </div>
    );
};

export {UseCallBack};