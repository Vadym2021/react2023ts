import React, {FC} from 'react';
import {IUser} from "../../interfaces/user.interface";

interface IProps {
    user: IUser
}


const User: FC<IProps> = ({user}) => {

    const {id, name, email} = user;

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
        </div>
    );
};

export {User};