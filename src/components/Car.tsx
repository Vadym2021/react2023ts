import React, {FC, useRef, useState} from 'react';
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carAtions} from "../redux";
import ira from '../assets/images/Ira.jpg'
import {carService} from "../services";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {

    const [image, setImage] = useState<string>(null);
    const {id, brand, price, year, photo} = car;
    const dispatch = useAppDispatch();
    const imgInput = useRef<HTMLInputElement>();

    const addPhoto = async (): Promise<void> => {
        const formData = new FormData();
        const file: Blob = imgInput.current.files[0];
        formData.append('photo', file)
        await carService.addPhoto(id, formData)
        setImage(URL.createObjectURL(file))
    };


    return (
        <div>
            <img src={photo || image || ira} alt={brand}
                 style={{cursor: photo || image ? 'default' : 'pointer', width: '250px'}}
                 onClick={() => imgInput.current.click()}/>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => dispatch(carAtions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carAtions.deleteCar({id}))}>Delete</button>
            <input type="file" accept={'image/jpeg, image/png'} style={{display: "none"}} ref={imgInput}
                   disabled={!!photo || !!image} onChange={addPhoto}/>
        </div>
    );
};

export {Car};