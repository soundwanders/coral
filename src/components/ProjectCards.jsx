import React from 'react';
import {
  GridWrapper,
  Card,
  PhotoWrapper,
  Photo,
  CardContainer,
  ProjectWrapper,
  CardText,
  BadgeContainer,
} from '../routes/Projects';
import Badges from '../components/common/Badges';
import data from '../db.json';

const ProjectCards = () => {
  return data.clients
    .slice(0, 6)
    .map(({ id, img, name, organization, email, service, dateAcquired }) => (
      <GridWrapper key={id}>
        <Card>
          <PhotoWrapper>
            <Photo src={img} id="ProjectPhoto" alt={name} draggable="false" />
            <Badges content="Info" info />{' '}
          </PhotoWrapper>
          <ProjectWrapper>
            <CardContainer>
              <CardText>{name}</CardText>
              <CardText>{organization}</CardText>
              <CardText>{service}</CardText>
              <CardText>{email}</CardText>
              <CardText>Due: {dateAcquired}</CardText>
              <BadgeContainer>
                {' '}
                <Badges content="Manage" manage /> <Badges content="View Tasks" tasks />{' '}
              </BadgeContainer>
            </CardContainer>
          </ProjectWrapper>
        </Card>
      </GridWrapper>
    ));
};

export default ProjectCards;
