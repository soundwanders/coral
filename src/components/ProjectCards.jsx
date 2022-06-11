import React from 'react';
import { GridSection, Row, CardText, ProjectWrapper, Photo } from '../routes/Projects';
import data from '../db.json';

const ProjectCards = () => {
  return data.clients.slice(0, 6).map(({ id, img, name, organization, email, totalSales }) => (
    <GridSection key={id}>
      <Row>
        <ProjectWrapper>
          <Photo src={img} id="ProjectPhoto" alt={name} draggable="false" />
        </ProjectWrapper>

        <ProjectWrapper>
          <CardText>{name}</CardText>
          <CardText>{organization}</CardText>
          <CardText>{email}</CardText>
          <CardText>{totalSales}</CardText>
          <CardText>project status</CardText>
        </ProjectWrapper>
      </Row>
    </GridSection>
  ));
};

export default ProjectCards;
