import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Breanna has done a lot. <br />  Here are some of her work experiences.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="JUN 2022- AUG 2022" text="AMAZON.COM INC.- Product Management-Technical Intern" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="SEP 2021 - PRESENT" text="HOPKINS CENTER FOR THE ARTS- Fellow" />
        <Article imgUrl={blog03} date="SEP 2020 - PRESENT" text="DARTMOUTH COLLEGE RESIDENTIAL LIFE- Undergraduate Advisor" />
        <Article imgUrl={blog04} date="JAN 2021 - SEP 2021" text="DARTMOUTH COLLEGE EAST WHEELOCK HOUSE- Brace Commons Student Manager" />
        <Article imgUrl={blog05} date="OCT 2022 - NOV 2022" text="DARTMOUTH COLLEGE DEPARTMENT OF MUSIC- Music 20 Teaching Assistant" />
      </div>
    </div>
  </div>
);

export default Blog;
