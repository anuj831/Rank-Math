import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PriceChart = ({ data }) => {
  return (
    <LineChart
      width={1400}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* Set stroke to orange (#FFA500) */}
      <Line type="monotone" dataKey="price" stroke="#FFA500" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default PriceChart;
