import React from 'react';
import NavBar from '../../components/NavBar'
import './About.scss';

function About() {

  const navStatus = { about: 'active' };

  return (
    <div className="About">
      <NavBar navStatus={ navStatus } />
      <div className="Blurb">   eliza is a 4th year undergrad studying computer science at northeastern university. now a software engineering intern$ at harvard medical school.
                  will graduate in may 2021! hire me@
   wannabe full-snack swe.  
       resume available upon request. 
            might try grad school abt ml... 
     / she is passionate about tech: for social good/ loves hackathon andopen-source. 
    takes random online courses for fun. 
                     does deep learning research.
also into all things artsy! 
          had /design 4breakfast.
grew up in hangzhou~ china. have lived in singapore.                     now based in boston.
                      
  *Not readable? SHe felt just as awkward introducing herself in  3rd person. but feel free to drop her chatbot a msg!</div>
    </div>
  );
}

export default About;