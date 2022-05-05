import React from 'react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import data from '../../db.json';

const fetchData = data.clients.map(({ name, growth, projects }) => ({ name, growth, projects }));

const OverviewChart = () => {
  return (
    <ResponsiveContainer minHeight={340} width="100%">
      <AreaChart
        data={fetchData}
        stackOffset="expand"
        margin={{
          top: 2,
          right: 2,
          left: 2,
          bottom: 2,
        }}
      >
        <Area type="monotone" dataKey="growth" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="projects" stackId="1" stroke="#6161ff" fill="#6161ff" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
