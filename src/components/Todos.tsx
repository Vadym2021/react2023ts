import React, {memo} from 'react';


// @ts-ignore
const Todos = memo( ({todos}) => {

    console.log('Todos');

    // @ts-ignore

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            {todos.map((todo: any, index: any) => <div key={index}>{todo}</div>)}
        </div>
    );
});

export {Todos};