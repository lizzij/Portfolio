import React from 'react';
import NavBar from '../../components/NavBar'
import Scene from '../../components/Scene'
import './About.scss';

function About() {

  const navStatus = { about: 'active' };

  return (
    <div className="About">
      <NavBar navStatus={ navStatus } />
      <Scene />
    </div>
  );
}

export default About;