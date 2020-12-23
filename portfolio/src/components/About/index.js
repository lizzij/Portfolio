import './styles.css';
import { Row, Col } from 'antd';

function About() {
  return (
    <Row className="About">
      <Col align="left" span={18}>I am an undergrad studying <i>Computer Science</i>. 
    I write code for work and for fun. On the side, I love to draw, write and vlog. 
    Sometimes I go for swims or long walks with my dog. My pandemic hobby is Kalimba.</Col>
      <Col align="right" size="large" span={2} offset={4}>
        Hi!
      </Col>
    </Row>
  );
}

export default About;
