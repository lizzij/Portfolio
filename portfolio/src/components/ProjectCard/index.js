import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './styles.scss';

const ProjectCard = ({ index, project }) => {
    // eslint-disable-next-line
    const {title, tags, image, blurb, readme} = project;
    var format;
    switch(index % 8) {
        case 0:
            format = "col-md-4";
            break;
        case 1:
            format = "col-md-6 offset-md-6 moveUp";
            break;
        case 2:
            format = "col-md-6 offset-md-3";
            break;
        case 3:
            format = "col-md-9";
            break;
        case 4:
            format = "col-md-4 offset-md-8";
            break;
        case 5:
            format = "col-md-6 moveUp";
            break;
        case 6:
            format = "col-md-6 offset-md-3";
            break;
        case 7:
            format = "col-md-9";
            break;
        default:
            format = "col-md-4";
    }
    return (
        <Row className="ProjectCardRow">
            <Col className={`ProjectCard ${format}`}>
                <Image src={image} fluid className="Thumbnail"/>
                <div className="Title">{title}</div>
                <div className="Abstract">
                    <div>{blurb}</div>
                    {/* <div>Tags: {tags.join(', ')}.</div> */}
                </div>
                <div>{readme}</div>
            </Col>
        </Row>
    );
}

export default ProjectCard;