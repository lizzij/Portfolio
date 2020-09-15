import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Button, Row } from 'react-bootstrap';
import './styles.scss';

const ProjectTags = ({ tags, selectTag }) => {
    const [selectedTag, setSelectionTag] = useState([]);
    const [selectedTagKey, selectedTagValue] = selectedTag;

    useEffect(() => {
        setSelectionTag([...tags][0]); // eslint-disable-next-line
    }, []);

    return (
        <Row className="Tags">
            {[...tags].map(tag => {
                const [key, value] = tag;
                return (
                    <Button 
                        variant="outline-dark" 
                        className={key === selectedTagKey? "Pill selected" : "Pill"}
                        onClick={() => {
                            setSelectionTag([key, value]);
                            selectTag(value);
                        }}
                        value={selectedTagValue}
                        >
                        <div className="Label">{value}</div>
                    </Button>
                );
            })}
        </Row>
        
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