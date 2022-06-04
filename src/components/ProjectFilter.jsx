import React from 'react';
import { ProjectUl, ListItem, Label } from '../routes/Projects';
import { Portrait } from './common/Portrait';
import data from '../db.json';

const ProjectList = props => {
  const ProjectFilter = data.Projects.filter(info => {
    if (props.input === '') return info;
    else {
      return (
        info.name.toLowerCase().includes(props.input) ||
        info.organization.toLowerCase().includes(props.input)
      );
    }
  });
  return ProjectFilter.map(
    ({ id, img, name, organization, address, email, phone, dateAcquired }) => (
      <ProjectUl key={id}>
        <Portrait src={img} id="ProjectPhoto" alt={name} draggable="false" />
        <Label>NAME</Label> <ListItem>{name}</ListItem>
        <Label>ORGANIZATION</Label> <ListItem>{organization}</ListItem>
        <Label>ADDRESS</Label> <ListItem>{address}</ListItem>
        <Label>EMAIL</Label> <ListItem>{email}</ListItem>
        <Label>PHONE</Label> <ListItem>{phone}</ListItem>
        <Label>ACQUIRED</Label> <ListItem>{dateAcquired}</ListItem>
      </ProjectUl>
    ),
  );
};

export default ProjectList;
