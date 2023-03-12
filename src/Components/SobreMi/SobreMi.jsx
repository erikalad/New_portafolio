import React from 'react';
import './SobreMi.css'
import { Progress, Space } from 'antd';
/* import CanvasJSReact from './../../Assest/canvasjs.react'; */
import ant from './../../Assest/skills/ant.svg'
import react from './../../Assest/skills/React.png'
import redux from './../../Assest/skills/Redux.png'
import bs from './../../Assest/skills/Bootstrap.png'
import js from './../../Assest/skills/JS.png'
/* var CanvasJSChart = CanvasJSReact.CanvasJSChart; */

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
      <div>Te voy a contar un poco sobre mí</div>
    
      <br></br>
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
     
    </div>
  );
};
export default SobreMi;