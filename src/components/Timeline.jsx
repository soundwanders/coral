import React from 'react';
import { TimelineWrapper } from '../routes/Projects';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdFlutterDash, MdDonutSmall } from 'react-icons/md';
import { RiBearSmileLine } from 'react-icons/ri';

const workIcon = {
  icon: <RiBearSmileLine />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <MdFlutterDash />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <MdDonutSmall />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

export default function ProjectsTimeline() {
  const timeline = [
    {
      icon: starIcon,
      date: 'June 2022',
      title: 'Start-Up Web Design',
      subtitle: 'Slimetime University',
      desc: 'UI/UX Engineering, Web Development, Digital Marketing',
    },
    {
      icon: workIcon,
      date: 'January 2022',
      title: 'Revitalize Digital Presence',
      subtitle: 'Billowbear Bakery',
      desc: 'User Experience, Web Design',
    },
    {
      icon: schoolIcon,
      date: 'April 2022',
      title: 'Content Marketing for Web, Mobile',
      subtitle: 'Hollandaze Resorts',
      desc: 'SEO, Web Application',
    },
    {
      icon: starIcon,
      date: 'March 2020',
      title: 'Full-Stack Website for ',
      subtitle: 'The Chocobo Coop',
      desc: 'Full-Stack Web Development, Web Design',
    },
    {
      icon: workIcon,
      date: 'January 2022',
      title: 'Web Design for a New Product Launch',
      subtitle: 'The Golden Berry',
      desc: 'UI/UX Engineering, Web Design',
    },
    {
      icon: workIcon,
      date: 'November 2021',
      title: 'eCommerce Web Application',
      subtitle: 'Poppyseed Sailing',
      desc: 'Web Application, User Experience, Web Design',
    },
    {
      icon: schoolIcon,
      date: 'August 2021',
      title: 'Digital Media, Content Development',
      subtitle: 'The Brainy Bunch',
      desc: 'Digital Marketing, Full-Stack Development, Web Design',
    },
  ];

  return (
    <TimelineWrapper>
      <VerticalTimeline layout="1-column-left" animate={false} className="react-timeline">
        {timeline.map((t, i) => {
          return (
            <VerticalTimelineElement key={i} date={t.date} {...t.icon}>
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </TimelineWrapper>
  );
}
