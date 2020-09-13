import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Container, Button, Row } from 'react-bootstrap';
import './styles.scss';

const ProjectTag = ({label}) => {
    return (
        <Button variant="outline-dark" className="Pill">
            <div className="Label">{label}</div>
        </Button>
    );
}

const ProjectTags = ({options}) => {
    const [selectedOption, setSelectionOption] = useState([]);
    const [displayKey, displayName] = selectedOption;

    useEffect(() => {
        setSelectionOption([...options][0]);
    }, []);

    return (
        <Container fluid className="Content">
          <Row className="Tags">
            {[...options].map(option => {
                const [key, value] = option;
                return (
                    <ProjectTag
                        className={
                            key === displayKey
                            ? "tag-item selected"
                            : "tag-item"
                        }
                        label={value} 
                        onClick={() => setSelectionOption([key, value])}
                    />
                );
            })}
          </Row>
        </Container>
    )
}

ProjectTags.defaultProps = {
    options: new Map([
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
    options: PropTypes.instanceOf(Map)
};

export default ProjectTags;