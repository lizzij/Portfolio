import './styles.css';
import { Row, Col, Button } from 'antd';

function HeaderMenu() {
  return (
    <Row className="HeaderMenu">
      <Col align="left" span={6}>
        <Button type="primary" shape="round">lizzij</Button>
      </Col>
      <Col span={12} className="Name">Eliza/Zijin Huang</Col>
      <Col align="right" span={6}>
        <Button type="default" shape="round">index</Button>
      </Col>
    </Row>
  );
}

export default HeaderMenu;
