import React from 'react';
import { GridSection, Row, CardText } from '../routes/Projects';
import data from '../db.json';

const ProjectCard = () => {
  return data.clients
    .slice(0, 6)
    .map(({ id, img, name, organization, email, totalSales, dateAcquired }) => (
      <GridSection key={id}>
        <Row>
          <CardText>{name}</CardText>
          <CardText>{organization}</CardText>
          <CardText>{dateAcquired}</CardText>
        </Row>

        <Row>
          <CardText>{email}</CardText>
          <CardText>{totalSales}</CardText>
        </Row>
      </GridSection>
    ));
};

export default ProjectCard;
