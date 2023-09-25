import React, { useEffect, useState } from 'react';
import GetDonate from '../../Utility/GetDonate';

const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noDataFound, setNodataFound] = useState('');


    useEffect( () => {

        const addDonate = JSON.parse(localStorage.getItem("Donets"));
        if(addDonate){
            setDonation(addDonate);
        }else{
            setNodataFound("No Data Found")
        }

    }, [])

    // console.log(donation);  
    return (
        <div>
            { 
                noDataFound ? <p className='flex justify-center items-center text-4xl h-screen font-bold text-red-600'>{noDataFound}</p> : 
                <div>
                    {
                        donation.map( item => <GetDonate key={item.id} item={item}></GetDonate>)
                    }
                </div>
            }
        </div>
    );
};

export default Donation;