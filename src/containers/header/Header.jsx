import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/baker.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Hire Breanna Boland Today</h1>
      <p>Learn about her experiences, passions, and skils; all of which make her a wonderful candidate for your company.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Her résumé</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>37 employers requested an interview with Breanna in the last 24 hrs</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
