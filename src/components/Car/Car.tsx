import React, {FC} from 'react';
import {ICar} from "../../interfaces/car.interface";
import {IUseState} from "../../types/useState.type";
import {carService} from "../../services/car.service";


interface IProps {
    car: ICar
    setCarForUpdate: IUseState<ICar | null>;
    setOnChange: IUseState<boolean>;
}

const Car: FC<IProps> = ({car, setCarForUpdate, setOnChange}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setOnChange(prevState => !prevState)
    }

    return (
        <div>
            <div>{id}</div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <div>
                <button onClick={() => setCarForUpdate(car)}>update</button>
                <button onClick={() => deleteCar()}>delete</button>
            </div>
        </div>
    );
};

export {Car};