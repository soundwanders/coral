import React from 'react';
import { GridSection, Row, CardText, PhotoWrapper, Photo } from '../routes/Projects';
import data from '../db.json';

const ProjectCards = () => {
  return data.clients
    .slice(0, 6)
    .map(({ id, img, name, organization, email, totalSales }) => (
      <GridSection key={id}>
        <Row>
          <PhotoWrapper>
            <Photo src={img} id="ClientPhoto" alt={name} draggable="false" />
          </PhotoWrapper>
          <CardText>{name}</CardText>
          <CardText>{organization}</CardText>
         <CardText>{email}</CardText>
          <CardText>{totalSales}</CardText>
          <CardText>project status</CardText>
        </Row>

      </GridSection>
    ));
};

export default ProjectCards;
