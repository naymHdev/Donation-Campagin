import React from 'react';

import { Outlet, useNavigation } from 'react-router-dom';
import Navber from '../Header/Navber';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div className="w-11/12 mx-auto">
            <Navber></Navber>
            {
                navigation.state === "loading" ?
                <p className='text-7xl font-bold text-orange-600 flex h-screen justify-center'>Loding...</p> :
                <Outlet></Outlet>
            }
        </div>
    );
};

export default MainLayout;