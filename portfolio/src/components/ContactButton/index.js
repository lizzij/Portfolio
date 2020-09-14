import React from 'react';
import { Button } from 'react-bootstrap';
import Face from '../Face'
import './styles.scss';

const ContactButton = () => {
    return (
        <div className="ContactButton">
            <a href="/contact">
                <Face />
                {/* <Button variant="outline-dark" className="Pill contact-pill">
                    <div className="Label">ContactMe</div>
                </Button> */}
            </a>
        </div>
        
    );
}

export default ContactButton;