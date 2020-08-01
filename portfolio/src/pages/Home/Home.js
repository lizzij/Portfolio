import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import './Home.scss';

function Home() {

  return (
    <div className="Home">
      <NavBar />
      <Header />

      <figure className="Video">
        {/* <img className="VideoPlaceholder"
          data-load-src="https://lekhoa.com/wp-content/themes/lekhoa/dist/images/temp/hero.png" 
          alt="" 
          src="https://lekhoa.com/wp-content/themes/lekhoa/dist/images/temp/hero.png"></img> */}
        <div className="VideoPlayer">
          <iframe id="video-iframe"
            data-module-vimeo-player="video-promo"
            src="https://player.vimeo.com/video/442765402?controls=0&amp;autoplay=1&amp;
            amptitle=0&amp;byline=0&amp;portrait=0&amp;sidedock=0;&amp;
            transparent=false&amp;autopause=false&amp;loop=1&amp;muted=1" 
            width="100%" height="100%" data-vimeo-player-autoplay="true" 
            frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" 
            allow="autoplay; encrypted-media" data-ready="true" title="Nebula"></iframe>
        </div>
      </figure>

      <section className="Projects">
        <Container fluid className="Content">
          <Row className="Tags">
            <Button variant="outline-dark" className="Pill">
              <div className="Label">selected</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">all</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">web dev</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">ml</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">hackathon</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">coop</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">research</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">mooc</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">blog</div>
            </Button>
            <Button variant="outline-dark" className="Pill">
              <div className="Label">etc</div>
            </Button>
          </Row>
        </Container>
      </section>

      <div className="ComingSoon">
        <p>I am working on it. More Content Coming Soon.</p>
        <p>More Content Coming Soon. I am working on it.</p>
        <p>I am working on it. More Content Coming Soon.</p>
        <p>More Content Coming Soon. I am working on it.</p>
        <p>I am working on it. More Content Coming Soon.</p>
        <p>More Content Coming Soon. I am working on it.</p>
      </div>

      <p className="Marquee">
        <span>
          <nobr className="MinorBlurb">special thx to my doggo</nobr>&nbsp;[⚈ ᵜ ⚈]&nbsp;Eliza Huang @ 2020&nbsp;[⚈ ₃⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈‿⚈]&nbsp;
          <nobr className="MinorBlurb">credits to my rubber duck&nbsp;</nobr>[⚈ ᴥ ⚈]&nbsp;Eliza Huang @ 2020&nbsp;[⚈◡⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈﹏⚈]&nbsp;
          <nobr className="MinorBlurb">Bye covid!</nobr>&nbsp;[⚈  ͟ʖ ⚈]&nbsp;Eliza Huang @ 2020&nbsp;[⚈ ▿ ⚈]&nbsp;Design &amp; Code w  ❥ in figma &amp; react&nbsp;[⚈ ω⚈]&nbsp;
          <nobr className="MinorBlurb">Brutalism? OCISLY ❥ </nobr>&nbsp;[⚈ ᵜ ⚈]&nbsp;Eliza Huang @ 2020&nbsp;[⚈ ₃⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈‿⚈]&nbsp;
          <nobr className="MinorBlurb">import tf as np</nobr>&nbsp;[⚈ ᴥ ⚈]&nbsp;Eliza Huang @ 2020&nbsp;[⚈◡⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈ ω⚈]&nbsp;
        </span>
        <span>
          <nobr className="MinorBlurb">special thx to my doggo</nobr>&nbsp;[⚈ ᵜ ⚈]&nbsp;Eliza Huang @ 2020&nbsp;[⚈ ₃⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈‿⚈]&nbsp;
          <nobr className="MinorBlurb">credits to my rubber duck&nbsp;</nobr>[⚈ ᴥ ⚈]&nbsp;Eliza Huang @ 2020&nbsp;[⚈◡⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈﹏⚈]&nbsp;
          <nobr className="MinorBlurb">Bye covid!</nobr>&nbsp;[⚈  ͟ʖ ⚈]&nbsp;Eliza Huang @ 2020&nbsp;[⚈ ▿ ⚈]&nbsp;Design &amp; Code w  ❥ in figma &amp; react&nbsp;[⚈ ω⚈]&nbsp;
          <nobr className="MinorBlurb">Brutalism? OCISLY ❥ </nobr>&nbsp;[⚈ ᵜ ⚈]&nbsp;Eliza Huang @ 2020&nbsp;[⚈ ₃⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈‿⚈]&nbsp;
          <nobr className="MinorBlurb">import tf as np</nobr>&nbsp;[⚈ ᴥ ⚈]&nbsp;Eliza Huang @ 2020&nbsp;[⚈◡⚈]&nbsp;Design &amp; Code w  ❥ in figma + react&nbsp;[⚈ ω⚈]&nbsp;
        </span>
      </p>
    </div>
  );
}

export default Home;