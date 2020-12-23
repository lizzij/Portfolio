import './styles.css';
import { Row, Col, Button } from 'antd';

function HeaderMenu() {
  return (
    <Row className="HeaderMenu">
      <Col align="left" span={8}>
        <Button type="primary" shape="round" className="homeButton">lizzij</Button>
      </Col>
      <Col span={8}>Eliza/Zijin Huang</Col>
      <Col align="right" span={8}>
        <Button type="default" shape="round">index</Button>
      </Col>
    </Row>
  );
}

export default HeaderMenu;
