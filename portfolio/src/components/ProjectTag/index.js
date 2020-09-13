import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.scss';

const ProjectTag = ({label}) => {
    return (
        <Button variant="outline-dark" className="Pill">
            <div className="Label">{label}</div>
        </Button>
    );
}

export default ProjectTag;