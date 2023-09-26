import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Label } from 'recharts';

const NewStatics = () => {

    const totalDonation = useLoaderData()
    const [totalDonationlength, setTotalDonationlength] = useState(12);
    const [ yourDonationLength , setYourDonationLength] = useState(0);

    

    useEffect(() => {
      setTotalDonationlength(totalDonation.data.length)
      const storedDonation = JSON.parse(localStorage.getItem('Donets'));
      if(storedDonation){
        setYourDonationLength(storedDonation.length)
      }

        
    }, [totalDonation, totalDonationlength ,yourDonationLength])



    const data = [
        { name: 'Total Donation', value: totalDonationlength - yourDonationLength },
        { name: 'Your Donation', value: yourDonationLength },
      ];
      const COLORS = ['#FF444A', '#00C49F'];


      const renderCustomizedLabel = ({ cx,cy, midAngle,innerRadius,outerRadius,percent, value}) => {

        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
      
        return (
          <text className='text-base md:text-xl font-semibold'  x={x}  y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
      }
      


    return (
        <div>
             <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={entry.index} fill={COLORS[index]} />
              ))}
              {
                COLORS.map((element, idx) => <Cell fill={element[idx]} />)
              }
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        </div>
    );
};

export default NewStatics;