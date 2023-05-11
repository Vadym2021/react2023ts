import React, {FC} from 'react';
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carAtions} from "../redux";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {

    const {id, brand, price, year} = car;
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => dispatch(carAtions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carAtions.deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};