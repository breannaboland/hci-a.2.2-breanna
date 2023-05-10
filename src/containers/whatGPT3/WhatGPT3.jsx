import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What has Breanna studied?" text="Breanna's studies in college have been incredibly interdsciplinary. She ensured that she incorporated her non-traditional passions into her academics and has thrived while doing so. Below, you can find a bit more about what she has done in her time at Dartmouth College." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are endless</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Computer Science" text="Discrete Math, AR & VR Development, Machine Learning & Stat Analysis, Human-Computer Interaction, Foundations of Applied Computer Science  " />
      <Feature title="African & African American Studies" text="Black Storytelling in XR, Rituals of Breath, The Black Arts Movement, Intro to African American Studies, Intro to the African Diaspora" />
      <Feature title="Music" text="Creative Music Theory, Voice Lessons, Glee Club, Modern Classical Music, Oral Tradition Musicianship, Creative Music Theory, Verzuz: A History of Black Popular Music" />
    </div>
  </div>
);

export default WhatGPT3;
