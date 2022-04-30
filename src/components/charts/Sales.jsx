import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { SaleSlices } from '../../utilities';
import data from '../../db.json';

const fetchSales = data.clients.map(({ name, totalSales }) => ({ name, totalSales }));

const ProjectsChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="desc">Anything displayed here.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer minHeight={345}>
      <PieChart
        margin={{
          top: 2,
          right: 4,
          left: 4,
          bottom: 2,
        }}
      >
        <Tooltip content={<CustomTooltip />} />
        <Pie data={fetchSales} dataKey="totalSales" outerRadius={120} fill="#8884d8" label>
          {data.clients.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={SaleSlices[index % SaleSlices.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProjectsChart;
