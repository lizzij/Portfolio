import React from 'react';
import './styles.scss';

const Video = () => {
    return (
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
    );
}

export default Video;