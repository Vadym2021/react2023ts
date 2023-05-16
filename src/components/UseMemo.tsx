import React, {useMemo, useState} from 'react';
import {IN} from "../interfaces";


// @ts-ignore
const summator = (n) => {
    console.log('start')
    let sum = n;
    for (let i = 0; i < 1000; i++) {
        // @ts-ignore
        sum += i
    }
    for (let i = 0; i < 4000000000; i++) {

    }
    console.log('finish')
    return sum
}

const UseMemo = () => {

    const [n, setN] = useState(5);
    const [count, setCount] = useState(0);

    // @ts-ignore
    const res = useMemo(() => summator(n), [n])

    // @ts-ignore
    return (
        <div>
            <div>RESULT:{res}</div>
            <div>Count:{count}</div>
            <button onClick={() => setN(prevState => ++prevState)}>incN</button>
            <button onClick={() => setCount(prevState => ++prevState)}>incCount</button>
        </div>
    );
};

export {UseMemo};