import React from 'react';
import { ClientUl, ListItem, Label } from '../routes/ClientList';
import { Portrait } from './common/Portrait';
import data from '../db.json';

const ClientList = props => {
  const ClientFilter = data.clients.filter(info => {
    if (props.input === '') return info;
    else {
      return (
        info.name.toLowerCase().includes(props.input) ||
        info.organization.toLowerCase().includes(props.input)
      );
    }
  });
  return ClientFilter.map(
    ({ id, img, name, organization, address, email, phone, dateAcquired }) => (
      <ClientUl key={id}>
        <Portrait src={img} id="ClientPhoto" alt={name} draggable="false" />
        <Label>NAME</Label> <ListItem>{name}</ListItem>
        <Label>ORGANIZATION</Label> <ListItem>{organization}</ListItem>
        <Label>ADDRESS</Label> <ListItem>{address}</ListItem>
        <Label>EMAIL</Label> <ListItem>{email}</ListItem>
        <Label>PHONE</Label> <ListItem>{phone}</ListItem>
        <Label>ACQUIRED</Label> <ListItem>{dateAcquired}</ListItem>
      </ClientUl>
    ),
  );
};

export default ClientList;
