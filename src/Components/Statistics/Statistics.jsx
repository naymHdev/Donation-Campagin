import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Label } from 'recharts';

const Statistics = () => {

const totalDonation = useLoaderData()
  console.log(totalDonation.data);
  const data = [
    { name: 'Group A', value: totalDonation.length },
    { name: 'Group B', value: "4" },
  ];
  const COLORS = ['#FF444A', '#00C49F'];

  useEffect( () => {
    const totalDonation = JSON.parse(localStorage.getItem());
    
  }, [])

  return (
    <div>
      <div>
        <h2>Welcome To Piechart</h2>

        {/* <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={entry.index} fill={COLORS[index]} />
              ))}
              {
                data.map((entry, index) => (
                  <Label
                    key={entry.index}
                    position="inside"
                    fill="white"
                    fontSize={19}
                  >
                    {`${(entry.value / data.reduce((acc, curr) => acc + curr.value, 0) * 100).toFixed(0)}%`}
                  </Label>
                ))
              }
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default Statistics;
