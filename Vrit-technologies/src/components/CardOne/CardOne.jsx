import React from 'react';
import './style.css';

const CardOne = () => {
  return (
    <div className='card-container'>
      <h4 className="journey-title">Your SkillShikchya Journey</h4>
      <p className="journey-subtitle">
        <span className="highlight-text">Step</span>
        <span> In. </span>
        <span className="highlight-text">Skill</span>
        <span> Up. </span>
        <span className="highlight-text">Stand</span>
        <span> Out.</span>
      </p>

      <div className='grid-container'>
        
        <div className="box box1">
          <div className="left-content">
            <img
              className="box-image"
              src="https://cdn-icons-png.flaticon.com/512/236/236832.png"
              alt="thumbnail"
            />
          </div>
          <div className="right-content">
            <h3 className="box-title">Start with Clarity</h3>
            <p className="box-subtitle">Step into a better learning path</p>
            <p className="box-description">
              Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start.
            </p>
          </div>
        </div>

        <div className='box box2'>
          <div className="left-content">
            <img
              className="box-image"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="thumbnail"
            />
          </div>
          <div className='right-content'>
            <h3 className="box-title">Learn by Doing</h3>
            <p className="box-subtitle">Practical skills, real projects.</p>
            <p className="box-description">
              Theory is great, but action is better. At SkillShikchya, you learn by doing with hands-on projects.
            </p>
          </div>
        </div>

        <div className="box box3">
          <div className="left-content">
            <img
              className="box-image"
              src="https://cdn-icons-png.flaticon.com/512/2922/2922522.png"
              alt="thumbnail"
            />
          </div>
          <div className="right-content">
            <h3 className="box-title">Get mentored & supported</h3>
            <p className="box-subtitle">You're not learning alone.</p>
            <p className="box-description">
              SkillShikchya's community of mentors and learners has your back with live support and expert insights.
            </p>
          </div>
        </div>

        <div className='box box4'>
          <div className="left-content">
            <img
              className="box-image"
              src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
              alt="thumbnail"
            />
          </div>
          <div className='right-content'>
            <h3 className="box-title">Achieve & showcase</h3>
            <p className="box-subtitle">Build your portfolio, get job-ready.</p>
            <p className="box-description">
              Each completed project builds a portfolio showcasing your skills and job readiness.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardOne;