import React from 'react';
import possibilityImage from '../../assets/Jumping.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4> Her Passions</h4>
      <h1 className="gradient__text">Unique in every way</h1>
      <p>Breanna enjoys the little things in life. She loves a good puzzle, a lovely walk in the park, a scenic hike, a good book, and a fun night playing Uno with friends. Above all, she is known for her singing voice and her passion for performance.</p>
    </div>
  </div>
);

export default Possibility;
