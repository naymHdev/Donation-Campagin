import React from 'react';
import Campain from './Campain/Campain';

const Campains = ({campains}) => {

  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 mb-8'>
      {
        campains.data.map( camp => <Campain key={camp.id} camp={camp}></Campain> )
      }
    </div>
  );
};

export default Campains;