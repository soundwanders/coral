import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { PastelPalette } from '../../utilities';
import { TooltipLabel } from '../common';
import data from '../../db.json';

const fetchSales = data.clients.map(({ name, totalSales }) => ({ name, totalSales }));

const ProjectsChart = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <TooltipLabel>{`${payload[0].name} - ${payload[0].value}`}</TooltipLabel>
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
        <Pie
          data={fetchSales}
          dataKey="totalSales"
          innerRadius={70}
          outerRadius={120}
          paddingAngle={5}
          fill="#6161ff"
        >
          {data.clients.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={PastelPalette[index % PastelPalette.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProjectsChart;
