import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Header/Banner';
import Campains from '../Pages/Campains';

const Home = () => {

    const campains = useLoaderData();
    // console.log(campains.data);

    return (
        <div>
           <Banner></Banner>
           <Campains campains={campains}></Campains>
        </div>
    );
};

export default Home;