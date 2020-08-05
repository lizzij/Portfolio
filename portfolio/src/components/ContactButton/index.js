import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.scss';

const ContactButton = () => {
    return (
        <a href="/contact">
            <Button variant="outline-dark" className="Pill contact-pill">
                <div className="Label">ContactMe</div>
            </Button>
        </a>
    );
}

export default ContactButton;