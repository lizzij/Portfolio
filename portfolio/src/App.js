import './App.less';
import { Layout } from 'antd';
import HeaderMenu from './components/HeaderMenu/index'
import About from './components/About/index';
import WorkHeaderMarquee from './components/WorkHeaderMarquee/index';
import Work from './components/Work/index';
import FooterMarquee from './components/FooterMarquee/index';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="Header">
          <HeaderMenu/>
        </Header>
        
        <Content className="Content">
          <About/>
          <WorkHeaderMarquee/>
          <Work/>
        </Content>
        
        <Footer className="Footer">
          <FooterMarquee/>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
