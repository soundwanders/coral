import React from 'react';
import { LineChart, Line, Legend, ResponsiveContainer } from 'recharts';
import data from '../../db.json';

const fetchData = data.clients.map(({ name, growth, projects }) => ({ name, growth, projects }));

const OverviewChart = () => {
  return (
    <ResponsiveContainer width="100%" minHeight={340}>
      <LineChart
        data={fetchData}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <Legend />
        <Line
          type="monotone"
          dataKey="growth"
          strokeWidth={2}
          stroke="#ff8834"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="projects" strokeWidth={2} stroke="#6161ff" fill="#6161ff" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
