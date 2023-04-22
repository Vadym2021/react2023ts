import React, {FC} from 'react';
import {ICar} from "../../interfaces/car.interface";
// import {carService} from "../../services/car.service";
import {Car} from "../Car/Car";
// import {CarForm} from "../CarForm/CarForm";
import {IUseState} from "../../types/useState.type";


interface IProps {
    cars: ICar[];
    setCarForUpdate: IUseState<ICar | null>;
    setOnChange:IUseState<boolean>;
}

const Cars: FC<IProps> = ({cars,setCarForUpdate,setOnChange}) => {
    console.log(cars)

    // const [cars, setCars] = useState<ICar[]>([])

    // useEffect(() => {
    //     carService.getAll().then(value => value.data).then(value => setCars(value))
    // }, [])

    return (
        <div>
            {/*<CarForm/>*/}
            {/*<hr/>*/}
            {cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setOnChange={setOnChange}/>)}

        </div>
    );
};

export {Cars};