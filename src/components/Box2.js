import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'; // Import necessary components from Recharts
import '../App.css';

const CustomizedContent = (props) => {
  const { x, y, value } = props;
  return (
    <g>
      <circle cx={x} cy={y} r={6} fill="#8884d8" />
      <text x={x} y={y - 10} textAnchor="middle" fill="#8884d8">{value}</text>
    </g>
  );
};

const Box2 = () => {

  const data = [
    { name: 'Jan', price: 2400 },
    { name: 'Feb', price: 1398 },
    { name: 'Mar', price: 9800 },
    { name: 'Apr', price: 3908 },
    { name: 'May', price: 4800 },
    { name: 'Jun', price: 3800 },
    { name: 'Jul', price: 4300 },
    { name: 'Aug', price: 2400 },
    { name: 'Sep', price: 1398 },
    { name: 'Oct', price: 6800 },
    { name: 'Nov', price: 7908 },
    { name: 'Dec', price: 9800 },
  ];

  return (
    <div className="Box2">
      <div className="bitcoin-info">
  
        <div className="dot red-dot" />
        <div className="bitcoin-text">
          <div className="BTC-text" style={{ fontSize: '32px', marginTop: '2vh' }}>Lower $4.895</div>
        </div>

        <div className="dot green-dot" style={{ marginLeft: '40%' }} />
        <div className="bitcoin-text">
          <div className="BTC-text" style={{ fontSize: '32px', marginTop: '2vh' }}>Higher $6.857</div>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" dot={<CustomizedContent />} />
        
            <circle cx="17%" cy="70%" r={6} fill="orange" />
            <text x="18%" y="73%" textAnchor="start" fontSize="2vw" fill="#8884d8">1BTC=$5.483</text>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Box2;
