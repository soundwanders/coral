import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { BluePaletteTwo } from '../../utilities';
import { TooltipLabel } from '../common';
import data from '../../db.json';

const fetchProjects = data.clients.map(({ name, projects }) => ({ name, projects }));
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <TooltipLabel>{`${payload[0].name} - ${payload[0].value}`} projects</TooltipLabel>
      </div>
    );
  }
  return null;
};

const ProjectsChart = () => {
  return (
    <ResponsiveContainer minHeight={340} width="100%">
      <PieChart
        margin={{
          top: 2,
          right: 2,
          left: 2,
          bottom: 2,
        }}
      >
        <Tooltip content={<CustomTooltip />} />
        <Pie
          data={fetchProjects}
          dataKey="projects"
          innerRadius={60}
          outerRadius={120}
          paddingAngle={10}
          fill="#6161ff"
          label
        >
          {data.clients.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={BluePaletteTwo[index % BluePaletteTwo.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProjectsChart;
