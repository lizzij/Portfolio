import './styles.css';
import { Row, Col, Button } from 'antd';
import { MailOutlined, LinkedinOutlined, GithubOutlined, MediumOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined, BehanceOutlined } from '@ant-design/icons';


const Contact = () => {
  return (
    <Row className="Contact">
      <Col flex="1 1 250px">
        For general enquiries:<br/>
        <Button shape="round" size="small" icon={<MailOutlined />}>elizazijinhuang@gmail.com</Button>
      </Col>
      <Col flex="auto">
        also find me on:<br/>
        <Button shape="round" size="small" icon={<LinkedinOutlined />}>LinkedIn</Button>
        <Button shape="round" size="small" icon={<GithubOutlined />}>GitHub</Button>
        <Button shape="round" size="small" icon={<MediumOutlined />}>Medium</Button>
        <Button shape="round" size="small" icon={<TwitterOutlined />}>Twitter</Button>
        <Button shape="round" size="small" icon={<InstagramOutlined />}>Instagram</Button>
        <Button shape="round" size="small" icon={<YoutubeOutlined />}>YouTube</Button>
        <Button shape="round" size="small" icon={<BehanceOutlined />}>Bēhance</Button>
      </Col>
    </Row>
  );
}

export default Contact;
