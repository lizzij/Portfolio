import React from 'react';
import NavBar from '../../components/NavBar'
import Scene from '../../components/Scene'
import './About.scss';

function About() {

  const navStatus = { about: 'active' };

  return (
    <div className="About">
      {/* <link href="//db.onlinewebfonts.com/c/b5079189698c77632120991d1178c1d1?family=CiseauxMatisseW90-Cut-Out-Linear" rel="stylesheet" type="text/css"/> */}
      <NavBar navStatus={ navStatus } />
      <Scene />
      <div className="Blurb">
        Eliza is a senior undergrad studying computer science at northeastern university.
        Now a software engineering intern at Harvard Catalyst.
        Will graduate in may 2021!
        * Not readable? She felt just as awkward introducing herself in  3rd person.
        </div>
    </div>
  );
}

export default About;