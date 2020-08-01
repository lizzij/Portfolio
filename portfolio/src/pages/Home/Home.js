import React from 'react';
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import Video from '../../components/Video';
import Projects from '../../components/Projects';
import ComingSoon from '../../components/ComingSoon';
import Footer from '../../components/Footer';
import './Home.scss';

function Home() {

  return (
    <div className="Home">
      <NavBar/>
      <Header/>
      <Video/>
      <Projects/>
      <ComingSoon/>
      <Footer/>
    </div>
  );
}

export default Home;