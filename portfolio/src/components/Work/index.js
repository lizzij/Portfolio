import React from 'react';
import ReactPlayer from 'react-player'
import WorkHeaderMarquee from '../WorkHeaderMarquee/index';
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

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        url={videoUrl}
        className='react-player'
        playing 
        loop 
        mute
        width='100%'
        height='100%'
      />
    </div>
  )
}

const Work = () => {
  const headerVideoUrl = "https://player.vimeo.com/video/442765402?controls=0&amp;autoplay=1&amp;amptitle=0&amp;byline=0&amp;portrait=0&amp;sidedock=0;&amp;transparent=false&amp;autopause=false&amp;loop=1&amp;muted=1"
  return (
    <Collapse 
      accordion 
      defaultActiveKey={['0']}
      expandIconPosition="right"
    >
      <Panel 
        className="WorkHeaderPanel"
        header={<WorkHeaderMarquee/>}
        key="0"
        showArrow={false}
        >
          <VideoPlayer videoUrl={headerVideoUrl} />
      </Panel>
      {projects.map(project => {
        const {title, key, tags, blurb, videoUrl} = project;
        return (
          <Panel 
            header={<Header title={title} tags={tags} blurb={blurb}/>} 
            key={key}
            >
            <VideoPlayer videoUrl={videoUrl} />
          </Panel>

        );
      })}
  </Collapse>
  );
}

export default Work;