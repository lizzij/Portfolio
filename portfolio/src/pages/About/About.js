import React from 'react';
import NavBar from '../../components/NavBar'
import './About.scss';

function About() {

  const navStatus = { about: 'active' };

  return (
    <div className="About">
      <NavBar navStatus={ navStatus } />
      <div>About</div>
    </div>
  );
}

export default About;