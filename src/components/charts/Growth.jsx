import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { BluePalette } from '../../utilities';
import { TooltipLabel } from '../common';
import data from '../../db.json';

const fetchGrowth = data.clients.map(({ name, growth }) => ({ name, growth }));

const GrowthChart = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <TooltipLabel>
            {`${payload[0].name} - ${payload[0].value}`}% growth this year
          </TooltipLabel>
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
          data={fetchGrowth} 
          dataKey="growth" 
          innerRadius={60}
          outerRadius={120} 
          paddingAngle={10} 
          fill="#6161ff"
          label 
        >
          {data.clients.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={BluePalette[index % BluePalette.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GrowthChart;
