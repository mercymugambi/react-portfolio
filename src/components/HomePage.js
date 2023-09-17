import React from 'react';
import Achievements from './Achievments';
import Header from './Header';
import LandingPage from './LandingPage';
import Projects from './Projects';

const HomePage = () => (
  <div>
    <h1>Welcome to My Page</h1>
    <Header />
    <LandingPage />
    <Achievements />
    <Projects />
  </div>
);

export default HomePage;
