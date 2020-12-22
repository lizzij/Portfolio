import './styles.css';
import { Row, Col, Button } from 'antd';

function HeaderMenu() {
  return (
    <Row>
      <Col align="left" span={8}>
        <Button type="primary" shape="round" className="homeButton">lizzij</Button>
      </Col>
      <Col span={8}>Eliza/Zijin Huang 黄子衿</Col>
      <Col align="right" span={8}>index</Col>
    </Row>
  );
}

export default HeaderMenu;
