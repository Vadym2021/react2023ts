import React, {FC} from 'react';
import {ICar} from "../../interfaces/car.interface";


interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {

    const {id, brand, price, year} = car;

    return (
        <div>
            <div>{id}</div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
        </div>
    );
};

export {Car};