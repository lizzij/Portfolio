import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Container, Button, Row } from 'react-bootstrap';
import './styles.scss';

const ProjectTags = ({tags}) => {
    const [selectedTag, setSelectionTag] = useState([]);
    const [displayKey, _] = selectedTag;

    useEffect(() => {
        setSelectionTag([...tags][0]);
    }, []);

    return (
        <Container fluid className="Content">
          <Row className="Tags">
            {[...tags].map(tag => {
                const [key, value] = tag;
                return (
                    <Button 
                        variant="outline-dark" 
                        className={key === displayKey? "Pill selected" : "Pill"}
                        onClick={() => setSelectionTag([key, value])}
                        >
                        <div className="Label">{value}</div>
                    </Button>
                );
            })}
          </Row>
        </Container>
    )
}

ProjectTags.defaultProps = {
    tags: new Map([
        ["selected", "selected"],
        ["all", "all"],
        ["web dev", "web dev"],
        ["ml", "ml"],
        ["hackathon", "hackathon"],
        ["coop", "coop"],
        ["research", "research"],
        ["mooc", "mooc"],
        ["blog", "blog"],
        ["etc", "etc"]
    ])
};

ProjectTags.proTypes = {
    tags: PropTypes.instanceOf(Map)
};

export default ProjectTags;