import './styles.css';
import { Row, Col, Button } from 'antd';
import { MailOutlined, LinkedinOutlined, GithubOutlined, MediumOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined, BehanceOutlined } from '@ant-design/icons';


const Contact = () => {
  return (
    <Row className="Contact">
      <Col flex="1 1 250px">
        For general enquiries:<br/>
        <Button shape="round" size="small" icon={<MailOutlined />}
          href="mailto:elizazijinhuang@gmail.com" rel="noopener noreferrer" target="_blank"
          >elizazijinhuang@gmail.com</Button>
      </Col>
      <Col flex="auto">
        also find me on:<br/>
        <Button shape="round" size="small" icon={<LinkedinOutlined />}
          href="https://www.linkedin.com/in/lizzij/" rel="noopener noreferrer" target="_blank"
          >LinkedIn</Button>
        <Button shape="round" size="small" icon={<GithubOutlined />}
          href="https://github.com/lizzij" rel="noopener noreferrer" target="_blank"
          >GitHub</Button>
        <Button shape="round" size="small" icon={<MediumOutlined />}
          href="https://medium.com/@lizzij" rel="noopener noreferrer" target="_blank"
          >Medium</Button>
        <Button shape="round" size="small" icon={<TwitterOutlined />}
          href="https://mobile.twitter.com/liz_zij" rel="noopener noreferrer" target="_blank"
          >Twitter</Button>
        <Button shape="round" size="small" icon={<InstagramOutlined />}
          href="https://www.instagram.com/lizzij.me/" rel="noopener noreferrer" target="_blank"
          >Instagram</Button>
        <Button shape="round" size="small" icon={<YoutubeOutlined />}
          href="https://www.youtube.com/channel/UChBgQQv9pAXPGPJt0mkymbA/featured" rel="noopener noreferrer" target="_blank"
          >YouTube</Button>
        <Button shape="round" size="small" icon={<BehanceOutlined />}
          href="https://www.behance.net/elizazijin3de9" rel="noopener noreferrer" target="_blank"
          >Bēhance</Button>
      </Col>
    </Row>
  );
}

export default Contact;
