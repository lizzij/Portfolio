import './styles.css';
import { Row, Col, Button } from 'antd';


const HeaderMenu = () => {
  
  const scrollToBottom = () => {
    window.scrollTo(0,document.body.scrollHeight);
  }

  return (
    <Row className="HeaderMenu">
      <Col align="left" span={6}>
        <Button type="primary" size="small" shape="round" href="./">lizzij</Button>
      </Col>
      <Col span={12} className="Name">Eliza/Zijin Huang</Col>
      <Col align="right" span={6}>
        <Button type="default"  size="small" shape="round" onClick={scrollToBottom}>contact</Button>
      </Col>
    </Row>
  );
}

export default HeaderMenu;
