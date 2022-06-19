import React from 'react';
import { TimelineWrapper, BadgeContainer } from '../routes/Projects';
import Badges from './common/Badges';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiDivingHelmet, GiGiantSquid } from 'react-icons/gi';
import { RiBearSmileLine, RiRobotLine } from 'react-icons/ri';

import { MdDonutSmall } from 'react-icons/md';

const workIcon = {
  icon: <RiBearSmileLine />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <RiRobotLine />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <MdDonutSmall />,
  iconStyle: { background: 'rgb(0, 205, 119)', color: '#fff' },
};

export default function ProjectsTimeline() {
  const timeline = [
    {
      icon: starIcon,
      date: 'June 2022',
      title: 'Website Services for Slimetime University',
      subtitle: 'Slimetime University',
      desc: 'Digital Marketing, Web Development, SEO',
    },
    {
      icon: workIcon,
      date: 'January 2022',
      title: `Revitalize Billowbear's Digital Presence`,
      subtitle: 'Billowbear Bakery',
      desc: 'Digital Marketing, Web Design, Web Development',
    },
    {
      icon: starIcon,
      date: 'April 2022',
      title: 'Reservation Services Web Application',
      subtitle: 'Hollandaze Resorts',
      desc: 'Digital Marketing, Web Application, Serverless Hosting',
    },
    {
      icon: schoolIcon,
      date: 'January 2022',
      title: 'Digital Campaign for The Golden Berry Product Launch',
      subtitle: 'The Golden Berry',
      desc: 'Digital Marketing, UI/UX Engineering, Web Design',
    },
    {
      icon: starIcon,
      date: 'March 2020',
      title: 'Full Website Services for the group at The Chocobo Coop',
      subtitle: 'The Chocobo Coop',
      desc: 'Full-Stack Web Services, Serverless Hosting',
    },
    {
      icon: workIcon,
      date: 'November 2021',
      title: `Expanding the Online Presence for Bigclaw Brewery`,
      subtitle: 'Bigclaw Brewery',
      desc: 'UI/UX Engineering, Web Design, Serverless Hosting',
    },
    {
      icon: workIcon,
      date: 'August 2021',
      title: 'Developing Digital Campaign for Seasonal Events',
      subtitle: 'The Brainy Bunch',
      desc: 'Digital Marketing, Web Design, Web Development',
    },
  ];

  return (
    <TimelineWrapper>
      <VerticalTimeline layout="1-column-left" className="react-timeline">
        {timeline.map((t, i) => {
          return (
            <VerticalTimelineElement key={i} date={t.date} {...t.icon}>
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>
                  )}
                  {t.desc && <p className="desc">{t.desc}</p>}
                  <BadgeContainer>
                    {' '}
                    <Badges content="Project Specs" info />
                    <Badges content="Repo" tasks />{' '}
                  </BadgeContainer>
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </TimelineWrapper>
  );
}
