import React from 'react';
import { LineChart, Line, Legend, ResponsiveContainer } from 'recharts';
import data from '../../db.json';

const fetchData = data.clients.map(({ name, growth, projects, conversions }) => ({
  name,
  growth,
  projects,
  conversions,
}));

const OverviewChart = () => {
  return (
    <ResponsiveContainer minHeight={340} width="99%">
      <LineChart
        data={fetchData}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <Line
          type="monotone"
          dataKey="growth"
          strokeWidth={2}
          stroke="#e55757"
          fill="#e55757"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="conversions"
          strokeWidth={2}
          stroke="#57e557"
          fill="#57e557"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="projects"
          strokeWidth={2}
          stroke="#5757e5"
          fill="#5757e5"
          dot={false}
        />
        <Legend
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 10,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
