
import {Layout} from 'antd';
import MenuDesplegable from './Menu-desplegable';
import SobreMi from './../SobreMi/SobreMi';
import './MenuDesplegable.css'

const {Content} = Layout;


const Inicio = () => {

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <MenuDesplegable/>
      <Content className='content'><SobreMi /></Content>
    </Layout>
  );
};
export default Inicio;