import React from 'react';
import './SobreMi.css'
import { Progress, Space } from 'antd';
/* import CanvasJSReact from './../../Assest/canvasjs.react'; */
import ant from './../../Assest/skills/ant.svg'
import react from './../../Assest/skills/React.png'
import redux from './../../Assest/skills/Redux.png'
import bs from './../../Assest/skills/Bootstrap.png'
import js from './../../Assest/skills/JS.png'
import cloudinary from './../../Assest/skills//cloudinary.png'
import figma from './../../Assest/skills/figma.png'
import html from './../../Assest/skills/html.png'
import git from './../../Assest/skills/git.png'
import css from './../../Assest/skills/css.png'
import express from './../../Assest/skills/express.png'
import node from './../../Assest/skills/node.png'
import postman from './../../Assest/skills/postman.png'
import paypal from './../../Assest/skills/paypal.png'
import sequelize from './../../Assest/skills/sequelize.webp'
import ts from './../../Assest/skills/ts.png'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import Header from './Header'
import Footer from './Footer'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'

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
        <img className='iconos' src={js} alt='ant'/>
      </Space>
      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={ant} alt='ant'/>
      </Space>
      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={react} alt='ant'/>
      </Space>
      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={redux} alt='ant'/>
      </Space>
      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
       
      </Space>
      <Space wrap className='porcentajes'>
        <Progress type="dashboard" percent={75} gapDegree={20} />
        <img className='iconos' src={bs} alt='ant'/>
      </Space>
      </div>

      <main className="sandbox">
        <Header />
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
        <Footer />
      </main>
     
    </div>
  );
};
export default SobreMi;