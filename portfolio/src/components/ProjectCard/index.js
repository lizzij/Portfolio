import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './styles.scss';

const ProjectCard = ({ index, project }) => {
    // eslint-disable-next-line
    const {title, tags, image, blurb, readme} = project;
    return (
        <Row className="ProjectCardRow">
            <Col className={`ProjectCard ${index % 8} col-md-6 offset-md-3`}>
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