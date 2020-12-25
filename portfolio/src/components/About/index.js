import './styles.css';
import { Row, Col, Typography } from 'antd';


const { Title } = Typography;

const About = () => {
  return (
    <Row className="About" flex="1 1 250px">
      <Col align="left" span={16}>I am an undergrad studying <i>Computer Science</i>. 
    I write code for work and for fun. On the side, I love to draw, write and vlog. 
    Sometimes I go for swims or long walks with my dog. My pandemic hobby of choice is Kalimba.</Col>
      <Col align="right" span={4} offset={4}>
        <Title className="Greeting">Hi</Title>
      </Col>
    </Row>
  );
}

export default About;
