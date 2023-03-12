import React, { useState } from 'react';
import { Layout, Menu  } from 'antd';
import { Link } from 'react-router-dom';
import { SlRocket } from "react-icons/sl";
import {BsCodeSlash} from "react-icons/bs";
import { TbFileCertificate} from "react-icons/tb";
import './MenuDesplegable.css'
import {TiContacts} from 'react-icons/ti'




const { Sider } = Layout;



export default function MenuDesplegable() {

  const [collapsed, setCollapsed] = useState(false);
  

  const onCollapse = (collapsed) => setCollapsed(collapsed);



  return (

   
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
  
      

      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className='menu'>

        <Menu.Item key="/" icon={<SlRocket />}>
           
          <span>Sobre Mi</span>
          <Link to="/"></Link>
        </Menu.Item>

        <Menu.Item key="/proyectos" icon={  <BsCodeSlash />}>
           
           <span>Proyectos</span>
           <Link to="/proyectos"></Link>
         </Menu.Item>


         <Menu.Item key="/certificados" icon={  <TbFileCertificate />}>
           
           <span>Certificados</span>
           <Link to="/certificados"></Link>
         </Menu.Item>

         <Menu.Item key="/contactame" icon={  <TiContacts />}>
           
           <span>Contactame</span>
           <Link to="/contactame"></Link>
         </Menu.Item>
      
      </Menu>


    </Sider>


  );
};

