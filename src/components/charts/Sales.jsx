import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ThemeColorPalette } from '../../utilities';
import { TooltipLabel } from '../common';
import data from '../../db.json';

const fetchSales = data.clients.map(({ name, totalSales }) => ({ name, totalSales }));

const SalesChart = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <TooltipLabel>{`${payload[0].name} - $${payload[0].value}`}</TooltipLabel>
        </div>
      );
    }
    return null;
  };
  return (
    <ResponsiveContainer minHeight={340} width="100%">
      <PieChart
        margin={{
          top: -50,
          right: 2,
          left: 2,
          bottom: 2,
        }}
      >
        <Tooltip content={<CustomTooltip />} />
        <Pie
          data={fetchSales}
          dataKey="totalSales"
          innerRadius={60}
          outerRadius={130}
          paddingAngle={8}
        >
          {data.clients.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ThemeColorPalette[index % ThemeColorPalette.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
