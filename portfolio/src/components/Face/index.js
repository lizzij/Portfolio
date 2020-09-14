import React, { Component } from 'react';
import './styles.scss';

// https://codepen.io/dudleystorey/pen/rLAKXz?editors=0110

class Face extends Component {
  state = {
    left: 0,
    top: 0
  }
  
  _onMouseMove = (e) => {
    this.setState({ x: e.pageX, y: e.pageY });
    console.log('pageX','top:'+e.pageX+'px; left:'+ e.pageY+'px;')
    console.log('clientX','top:'+e.clientX+'px; left:'+ e.clientY+'px;')
    console.log('window','top:'+window.pageXOffset+'px; left:'+ window.pageYOffset+'px;')
  }

  render() {
    return (
      <div 
        id="face"
        onMouseMove={ this._onMouseMove.bind(this) }
        className='cursor'
        >
        <div class="left eye">
            <div class="pupil"></div>
        </div>
        <div class="right eye">
            <div class="pupil"></div>
        </div>
        <div id="mouth">
          <svg viewBox="0 0 500 500">
            <path id="curve" 
            fill="transparent"
            d="
            M73.2,148.6
            c4,6.1,65.5,96.8,178.6,95.6
            c111.3-1.2,170.8-90.3,175.1-97
            " />
            <text width="500">
              <textPath href="#curve">
                Contact Me! Say Hi. Don't be a stranger
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    )
  }
}

export default Face;