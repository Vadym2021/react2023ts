import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carAtions} from "../redux";

const CarForm: FC = () => {
    const {reset, handleSubmit, register, setValue} = useForm<ICar>()

    const dispatch = useAppDispatch();

    const {carForUpdate} = useAppSelector(state => state.carReducer)

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])


    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carAtions.create({car}))
        reset()
    }

    const update: SubmitHandler<ICar> = async (car) => {
        dispatch(carAtions.update({id: carForUpdate.id, car}))
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};