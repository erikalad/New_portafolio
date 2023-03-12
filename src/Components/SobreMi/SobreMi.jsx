import React from 'react';
import './SobreMi.css'
import { Progress, Space } from 'antd';
/* import CanvasJSReact from './../../Assest/canvasjs.react'; */

import react from './../../Assest/skills/React.png'
import redux from './../../Assest/skills/Redux.png'
import js from './../../Assest/skills/JS.png'
import html from './../../Assest/skills/html.png'
import css from './../../Assest/skills/css.png'
import express from './../../Assest/skills/express.png'
import node from './../../Assest/skills/node.png'
import sequelize from './../../Assest/skills/sequelize.webp'
import postgres from './../../Assest/skills/post.png'
import ts from './../../Assest/skills/ts.png'
import EmblaCarousel from './EmblaCarousel'
import Header from './Header'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'
import Galery from './Galery'

/* var CanvasJSChart = CanvasJSReact.CanvasJSChart; */
const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' }
const SLIDE_COUNT = 16
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const SobreMi = () => {

 /*  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title:{
      text: "Simple Column Chart with Index Labels"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column",
			dataPoints: [
				{ label: '',  y: 80 , color: "#fbe4be"  },
				{ label: "Arte", y: 50, color: "#fbe4be" },
				{ label: "Ciencia", y: 30, color: "#fbe4be"  },
				{ label: "Ecológico",  y: 20 , color: "#fbe4be" },
			
			]
    }]
  } */
  

 

  return (
    <div>
      <h2>Hola, Soy Erika Ladner</h2>
      <hr></hr>
      <br></br>
      <div>Skills</div>
    
      <br></br>
      <h3>FrontEnd</h3>
      <div className='contenedor-porcentajes'>
      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={js} alt='JavaScript'/>
      </Space>


      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={html} alt='HTML'/>
      </Space>

      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={css} alt='CSS'/>
      </Space>

      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={react} alt='REACT'/>
      </Space>

      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={redux} alt='REDUX'/>
      </Space>
      </div>

    


     <h3>BackEnd</h3>
     <br></br> 
      <div className='contenedor-porcentajes'>

      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={node} alt='NODE.JS'/>
      </Space>


      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={express} alt='EXPRESS'/>
      </Space>

      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={sequelize} alt='SEQUELIZE'/>
      </Space>

      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={postgres} alt='POSTGRESQL'/>
      </Space>
      </div>

    {/*   <main className="sandbox">
        <Header />
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
   
      </main> */}

    <div>
      <h3>Utilizando las siguientes herramientas de poducción y visualización</h3>
      <Galery />
    </div>
     
    </div>
  );
};
export default SobreMi;