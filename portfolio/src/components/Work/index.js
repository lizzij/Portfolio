import React from 'react';
import { Collapse, Row, Col, Button } from 'antd';
import { projects } from './data.json'
import './styles.css';

const { Panel } = Collapse;

const Header = ({ title, tags, blurb }) => {
  return (
    <Row>
      <Col align="left" flex="1 1 250px">
        <b>{title}</b>&nbsp;&nbsp;
        {tags.map(tag => <Button size="small" shape="round">{tag}</Button>)}
      </Col>
      <Col><i>{blurb}</i></Col>
    </Row>
  )
}

const Work = () => {
  return (
    <Collapse 
      accordion 
      // defaultActiveKey={['1']}
      expandIconPosition="right"
    >
      {projects.map(project => {
        const {title, key, tags, blurb} = project;
        return (
          <Panel header={<Header title={title} tags={tags} blurb={blurb}/>} key={key}>
            <p>Coming soon...</p>
          </Panel>
        );
      })}
  </Collapse>
  );
}

export default Work;