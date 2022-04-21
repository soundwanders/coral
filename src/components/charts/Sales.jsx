import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import data from '../../db.json';

const fetchSales = data.clients.map(({ name, totalSales }) => ({ name, totalSales }));

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }
  return null;
};

const SalesChart = () => {
  return (
    <ResponsiveContainer width="90%" height="90%">
      <BarChart
        data={fetchSales}
        margin={{
          top: 5,
          right: 30,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="Client" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Revenue" stackId="a" fill="#d88884" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
