import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ProjectSlices } from '../../utilities';
import data from '../../db.json';

const fetchProjects = data.clients.map(({ name, projects }) => ({ name, projects }));
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p className="label">{`${payload[0].name} -- $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const ProjectsChart = () => {
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
          data={fetchProjects} 
          dataKey="projects" 
          innerRadius={20}
          outerRadius={120} 
          fill="#6161ff"
        >
          {data.clients.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ProjectSlices[index % ProjectSlices.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProjectsChart;
