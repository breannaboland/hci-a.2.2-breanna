import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'PRESIDENT - Dartmouth College Glee Club',
    text: 'Managed a choir of around 30 singers. She acted as a liason between choir members and the facutly directors of the choir, in addition to planning for each termly concert and so much more. ',
  },
  {
    title: 'CO-MODERATOR - Paleopitus Senior Society',
    text: 'Managed a delegation of 24 student campus leaders by writing meeting agendas, facilitating discussions between members and the Dean of the College, communicating updates and important information to the delegation, and fielding questions',
  },
  {
    title: 'VICE PRESIDENT - NAACP Chapter at Dartmouth College',
    text: 'Assisted the president with a number of tasks and led a multi-term mental health campaign for the organization. Facilitated collaboration with the Dartmouth College Counseling Center to help destigmatize mental health in the Black community.',
  },
  {
    title: 'PRESIDENT -  Dartmouth College East Wheelock House Council',
    text: 'Planned and carried out several events for East Wheelock House with the goal of fostering community between house members. Also created and managed the Dartmouth.East.Wheelock Instagram page, designed posts & stories, and acquired nearly 500 followers.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The next generation of leaders is now.</h1>
      <p>And Breanna is one of them.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
