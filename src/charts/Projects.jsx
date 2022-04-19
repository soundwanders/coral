import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import data from '../db.json';

const fetchProjects = data.clients.map(({ name, projects }) => ({ name, projects }));

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }
  return null;
};

const ProjectsChart = () => {
  return (
    <ResponsiveContainer width="90%" height="90%">
      <BarChart
        data={fetchProjects}
        margin={{
          top: 5,
          right: 30,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="Clients" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="projects" stackId="a" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProjectsChart;
