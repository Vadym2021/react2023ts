import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {RequiredAuth} from './hoc';

import {MainLayout} from "./layouts";
import {CarPage, LoginPage, RegisterPage} from "./page";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'login'}/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
                <Route path={'cars'} element={
                    <RequiredAuth>
                        <CarPage/>
                    </RequiredAuth>}/>
            </Route>
        </Routes>
    );
};

export default App;


