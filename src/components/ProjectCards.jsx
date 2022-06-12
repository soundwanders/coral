import React from 'react';
import { GridSection, Row, CardText, ProjectWrapper, Photo } from '../routes/Projects';
import Badges from '../components/common/Badges';
import data from '../db.json';

const ProjectCards = () => {
  return data.clients.slice(0, 6).map(({ id, img, name, organization, email, service }) => (
    <GridSection key={id}>
      <Row>
        <ProjectWrapper>
          <Photo src={img} id="ProjectPhoto" alt={name} draggable="false" />
        </ProjectWrapper>

        <ProjectWrapper>
          <CardText>{name}</CardText>
          <CardText>{organization}</CardText>
          <CardText>{email}</CardText>
          <CardText>{service}</CardText>
          <CardText> <Badges content="Active" projects /> </CardText>
        </ProjectWrapper>
      </Row>
    </GridSection>
  ));
};

export default ProjectCards;
