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
    <ResponsiveContainer minHeight={320} width="100%">
      <LineChart
        data={fetchData}
        margin={{
          top: 10,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >
        <Line
          type="monotone"
          dataKey="growth"
          strokeWidth={2}
          stroke="#fa7c7c"
          fill="#fa7c7c"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="conversions"
          strokeWidth={2}
          stroke="#1dd177"
          fill="#1dd177"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="projects"
          strokeWidth={2}
          stroke="#6f57e5"
          fill="#6f57e5"
          dot={false}
        />
        <Legend
          height={30}
          formatter={(value, entry, index) => <span className="overview-legend">{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
