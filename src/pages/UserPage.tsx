import React, {useEffect, useState} from 'react';
import {IUser} from "../interfaces/user.interface";
import UserForm from "../components/UserForm/UserForm";
import {Users} from "../components/Users/Users";
import {uerService} from "../services/uer.service";

const UserPage = () => {

    const [users, setUsers] = useState<IUser[]>([])


    useEffect(()=>{
        // @ts-ignore
        uerService.getAll().then(value => value.data).then(value => setUsers(value));
    },[])



    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UserPage};
