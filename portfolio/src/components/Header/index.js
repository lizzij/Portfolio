import React from 'react';
import './styles.scss';

const Header = () => {
    return (
        <svg className="Header"
            xmlns="http://www.w3.org/2000/svg" width="100%" height="10%" 
            viewBox='0.6 0 198.3 13'>
            <text id="name-eliza" classtextlength='57' lengthAdjust="spacing" x='0' y="12" >
                ELIZA
            </text>
            <text id="name-slash" classtextlength='10' lengthAdjust="spacing" x='58' y="12" >
                /
            </text>
            <text id="name-zijin" classtextlength='48' lengthAdjust="spacing" x='73' y="12" >
                ZIJIN
            </text>
            <text id="name-huang" classtextlength='75' lengthAdjust="spacing" x='129.6' y="12" >
                HUANG
            </text>
      </svg>
    );
}

export default Header;