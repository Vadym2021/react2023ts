import React, {FC} from 'react';
import {IUser} from "../interfaces/user.interface";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser;
}


const User: FC<IProps> = ({user}) => {

    const navigate = useNavigate();

    const {id, name} = user;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <button onClick={() => navigate(`${id}`,{state:{...user}})}>UserDetail</button>
        </div>
    );
};

export {User};