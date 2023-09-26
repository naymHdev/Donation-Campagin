import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const marks = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ];

  const COLORS = ['#FF0000', '#00FF00',];

  return (
    <div>
      <div>
        <h2>Welcome To Piechart</h2>

        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie data={marks} dataKey="value">
              {marks.map((entry, index) => (
                <Cell key={entry.index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
