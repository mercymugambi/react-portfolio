import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/images/mercy.jpg';

const LandingPage = () => (
  <div className="hero container">
    <div className="left flex-center">
      <div className="info flex-center">
        <h3 className="role">Full Stack Developer</h3>
        <TypeAnimation
          sequence={[
            'Hello!\nWelcome to my website.\nMy name is Mercy Mugambi!\nInnovative Full Stack Developer\nwith a passion for creating\nseamless web applications.',
            1000,
            '',
          ]}
          speed={50}
          style={{ whiteSpace: 'pre-line', fontSize: '20px', color: '#1976d2' }}
          repeat={Infinity}
        />
        <p>
          Skilled in front-end and
          back-end technologies, ready to take on new challenges.
        </p>

        <button type="button" className="lwt">Lets work together</button>
      </div>
    </div>

    <div className="center flex-center">
      <img src={profileImage} alt="profile" />

    </div>

    <div className="right flex-center">
      <div className="info flex-center">
        <div className="values">
          <h1 id="experience">
            {' '}
            +
          </h1>
          <h3>years of experience</h3>
        </div>
        <div className="values">
          {/* <h1 id="clients" /> */}
          <h3>happy clients</h3>
        </div>
        <div className="values">
          <h1 id="projects">
            {' '}
            +
          </h1>
          <h3>projects completed</h3>
        </div>
        <div className="values">
          {/* <h1 id="screens" /> */}
          <h3>screens</h3>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
