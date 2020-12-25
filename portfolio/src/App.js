import './App.less';
import { Layout } from 'antd';
import HeaderMenu from './components/HeaderMenu/index'
import About from './components/About/index';
import Work from './components/Work/index';
import Contact from './components/Contact/index';
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
          <Work/>
        </Content>
        
        <Footer className="Footer">
          <Contact/>
          <FooterMarquee/>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
