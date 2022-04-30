import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ProjectSlices } from '../../utilities';
import data from '../../db.json';

const fetchProjects = data.clients.map(({ name, projects }) => ({ name, projects }));

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
        <Pie data={fetchProjects} dataKey="projects" outerRadius={120} fill="#8884d8" label>
          {data.clients.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ProjectSlices[index % ProjectSlices.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProjectsChart;
