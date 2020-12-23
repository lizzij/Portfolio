import React from 'react';
import { Collapse } from 'antd';
import { projects } from './data.json'
import './styles.css';

const { Panel } = Collapse;

const Work = () => {
  return (
    <Collapse 
      accordion 
      // defaultActiveKey={['1']}
      expandIconPosition="right"
    >
      {projects.map((project) => {
        const {header, key, blurb} = project;
        return (
          <Panel header={header} key={key}>
            <p>{blurb}</p>
          </Panel>
        );
      })}
  </Collapse>
  );
}

export default Work;