import React from 'react';
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import Video from '../../components/Video';
import Projects from '../../components/Projects';
import ComingSoon from '../../components/ComingSoon';
// import Scene from '../../components/Scene';
import Footer from '../../components/Footer';
import './Home.scss';

function Home() {
  
  const navStatus = { projects: 'active' };
  
  return (
    <div className="Home">
      <NavBar navStatus={ navStatus } />
      <Header/>
      <Video/>
      <Projects/>
      <ComingSoon/>
      {/* <Scene/> */}
      <Footer/>
    </div>
  );
}

export default Home;