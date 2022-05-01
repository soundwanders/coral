import React from 'react';
import styled from 'styled-components';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ProjectSlices } from '../../utilities';
import data from '../../db.json';

const fetchProjects = data.clients.map(({ name, projects }) => ({ name, projects }));
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <TooltipLabel>
          {`${payload[0].name} - ${payload[0].value}`} projects
        </TooltipLabel>
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
          innerRadius={60}
          outerRadius={120} 
          paddingAngle={10} 
          fill="#6161ff"
          label 
        >
          {data.clients.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ProjectSlices[index % ProjectSlices.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

const TooltipLabel = styled.p`
  padding: 0.33rem 0.6rem;
  border: 0px solid transparent;
  border-radius: 2rem;
  color: #00009c;
  font-size: 0.9rem;
  font-weight: 600;
  background: #ffe1d7;
  transform: translateY(0.7rem);
  opacity: 0.95;
`;

export default ProjectsChart;
