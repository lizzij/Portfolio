import React from 'react';
import { Row, Image } from 'react-bootstrap';
import './styles.scss';

const ProjectCard = ({ project }) => {
    const {title, tags, image, blurb, readme} = project;
    return (
        <Row>
            <Image src={image}/>
            <div>{title}</div>
            <div>{tags}</div>
            <div>{blurb}</div>
            <div>{readme}</div>
        </Row>
    );
}

export default ProjectCard;