import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from 'recharts';
import data from '../../db.json';

const fetchData = data.clients.map(({ name, growth, projects }) => ({ name, growth, projects }));

const OverviewChart = () => {
  return (
    <ResponsiveContainer minHeight={345}>
      <AreaChart
        data={fetchData}
        stackOffset="expand"
        width={400}
        margin={{
          top: 2,
          right: 4,
          left: 4,
          bottom: 2,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Area type="monotone" dataKey="projects" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="growth" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
