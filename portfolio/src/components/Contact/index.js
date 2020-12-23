import './styles.css';
import { Row, Col, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

function Contact() {
  return (
    <Row className="Contact">
      <Col xs={8} sm={8} md={8} lg={8} xl={8}>
        For general enquiries:<br/>
        <Button shape="round" size="small" icon={<MailOutlined />}>elizazijinhuang@gmail.com</Button>
      </Col>
      <Col xs={16} sm={16} md={16} lg={16} xl={16}>
        Also find me on:<br/>
        <Button shape="round" size="small" icon={<MailOutlined />}>LinkedIn</Button>
        <Button shape="round" size="small" icon={<MailOutlined />}>GitHub</Button>
        <Button shape="round" size="small" icon={<MailOutlined />}>Medium</Button>
        <Button shape="round" size="small" icon={<MailOutlined />}>Twitter</Button>
        <Button shape="round" size="small" icon={<MailOutlined />}>Instagram</Button>
        <Button shape="round" size="small" icon={<MailOutlined />}>YouTube</Button>
        <Button shape="round" size="small" icon={<MailOutlined />}>Bēhance</Button>
      </Col>
    </Row>
  );
}

export default Contact;
