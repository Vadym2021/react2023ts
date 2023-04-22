import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IUser} from "../../interfaces/user.interface";
import {uerService} from "../../services/uer.service";
import {IUseState} from "../../types/useState.type";

interface IProps {
    setUsers: IUseState<IUser[]>
}

const UserForm: FC<IProps> = ({setUsers}) => {

    const {register, handleSubmit, reset} = useForm<IUser>();

    const save: SubmitHandler<IUser> = async (user) => {
        const {data} = await uerService.create(user);
        setUsers(prev => [...prev, data])
        reset()

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>save</button>

        </form>
    );
};

export default UserForm;