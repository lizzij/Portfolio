import './App.less';
import { Layout } from 'antd';
import HeaderMenu from './components/HeaderMenu/index'
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
        <Content>I am an undergrad studying Computer Science. 
          I write code for work and for fun. On the side, I love to draw, write and vlog. 
          Sometimes I go for swims or long walks with my dog. My pandemic hobby is Kalimba.
        </Content>
        <Work/>
        <Footer className="Footer"><FooterMarquee/></Footer>
      </Layout>
    </div>
  );
}

export default App;
