import { FileOutlined, PieChartOutlined, UserOutlined,DesktopOutlined ,TeamOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import MenuDesplegable from './Menu-desplegable';
import { Player } from '@lottiefiles/react-lottie-player';

const { Header, Content, Footer, Sider } = Layout;


const Inicio = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
     {/*  <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Erika Ladner ©2023 
        </Footer>
      </Layout> */}
      <MenuDesplegable/>
      <Content><Player
  src='https://assets1.lottiefiles.com/packages/lf20_myejiggj.json'
  className="player"
  loop
  autoplay
 
  style={{ height: '50px', width: '50px' }}
/></Content>
    </Layout>
  );
};
export default Inicio;