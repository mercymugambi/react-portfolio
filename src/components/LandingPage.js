import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/images/mercy.jpg';
import documentCV from '../assets/documents/mercymugambiCV.pdf';

const LandingPage = () => (
  <>
    <div className="hero container">
      <div className="left flex-center">
        <div className="info flex-center">
          {/* <h1 className="name" style={{ color: '#ccc' }}>Mercy Mugambi</h1> */}
          <h3 className="role">Full Stack Developer</h3>
          <TypeAnimation
            sequence={[
              'Hello!\nWelcome to my website.\nMy name is Mercy Mugambi! Innovative Full Stack Developer with a passion for creating seamless web applications.',
              1000,
              '',
            ]}
            speed={50}
            style={{ whiteSpace: 'pre-line', fontSize: '18px', color: '#1976d2' }}
            repeat={Infinity}
          />
          <a href={documentCV} className="lwt cv" download="mercymugambiCV.pdf">Download CV</a>
        </div>
      </div>

      <div className="center flex-center">
        <img src={profileImage} alt="profile" />

      </div>

      <div className="right flex-center">
        <div className="info flex-center">
          <h2>Backend Stack:</h2>
          <div className="skill">
            Ruby, Rails, PostgreSql
          </div>
          <h2>Frontend Stack:</h2>
          <div className="skill">
            React, Javascript, Vue.js, Html5, CSS
          </div>
          <h2>Version Control:</h2>
          <div className="skill">
            Git, Github, Gitlab, BitBucket
          </div>
          <h2>UI Libraries:</h2>
          <div className="skill">
            Bootstrap, MaterialUI, TailWind, NextUI
          </div>
        </div>
      </div>
    </div>
  </>
);

export default LandingPage;
