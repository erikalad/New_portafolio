import React, { useState } from 'react';
import { Layout, Menu  } from 'antd';
import { Link } from 'react-router-dom';
import { SlRocket } from "react-icons/sl";
import {BsCodeSlash} from "react-icons/bs";
import SubMenu from 'antd/es/menu/SubMenu';
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

        <Menu.Item key="/dashboard" icon={  <SlRocket />}>
           
          <span>Sobre Mi</span>
          <Link to="/dashboard"></Link>
        </Menu.Item>

        <Menu.Item key="/perfil" icon={  <BsCodeSlash />}>
           
           <span>Proyectos</span>
           <Link to="/perfil"></Link>
         </Menu.Item>


         <Menu.Item key="/perfil" icon={  <TbFileCertificate />}>
           
           <span>Certificados</span>
           <Link to="/perfil"></Link>
         </Menu.Item>

         <Menu.Item key="/perfil" icon={  <TiContacts />}>
           
           <span>Contactame</span>
           <Link to="/perfil"></Link>
         </Menu.Item>
        


       {/*  <SubMenu icon={ <SlPeople />} title="Usuarios" >

            

                <Menu.Item icon={<SlPencil /> }>
                     
                     <span>Modificar</span>
                     <Link to="/dashoboard-user-modificar"></Link>
                 </Menu.Item>

                <Menu.Item icon={<SlTrash /> }>
                   
                    <span>Borrar</span>
                    <Link to="/dashoboard-user-borrar"></Link>
                </Menu.Item>
      
        </SubMenu>


        <SubMenu icon={< SlEvent />} title="Eventos" >

            <Menu.Item icon={<SlPlus /> }>
            
                <span>Agregar</span>
                <Link to="/dashoboard-eventos-agregar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlPencil /> }>
                
                <span>Modificar</span>
                <Link to="/dashoboard-eventos-modificar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlTrash /> }>
            
                <span>Borrar</span>
                <Link to="/dashoboard-eventos-borrar"></Link>
            </Menu.Item>

        </SubMenu>




        <SubMenu icon={< BsPersonBadge />} title="Guias" >

            <Menu.Item icon={<SlPlus /> }>
            
                <span>Agregar</span>
                <Link to="/dashoboard-guias-agregar"></Link>
            </Menu.Item>

            <Menu.Item icon={<SlPencil /> }>
                
                <span>Modificar</span>
                <Link to="/dashoboard-guias-modificar"></Link>
            </Menu.Item>


        </SubMenu>  


        <SubMenu icon={< FaTicketAlt />} title="Tickets" >

            <Menu.Item icon={<SlPencil /> }>

                <span>Modificar</span>
                <Link to="/dashoboard-ticket-modificar"></Link>
            </Menu.Item>


            </SubMenu>  

        <Menu.Item icon={  <FiLogOut />}>
            <span></span>
          
        </Menu.Item> */}

     
      </Menu>


    </Sider>


  );
};

