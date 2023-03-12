import React from 'react'
import ant from './../../Assest/skills/ant.svg'
import bs from './../../Assest/skills/Bootstrap.png'
import cloudinary from './../../Assest/skills//cloudinary.png'
import figma from './../../Assest/skills/figma.png'
import git from './../../Assest/skills/git.png'
import postman from './../../Assest/skills/postman.webp'
import paypal from './../../Assest/skills/paypal.png'
import auth from './../../Assest/skills/auth0.png'
import mp from './../../Assest/skills/mercadopago.png'
import './Galery.css'

export default function Galery() {



  return (
    <div>
      <section className='carrousel'>
        <img src={ant} alt="ant" />
        <img src={bs} alt="bs" />
        <img src={cloudinary} alt="cloudinary" />
        <img src={figma} alt="figma" />
        <img src={git} alt="git" />
        <img src={postman} alt="postman" />
        <img src={paypal} alt="paypal" />
        <img src={auth} alt="auth" />
        <img src={mp} alt="mp" />
      </section>
  
    </div>
  )
}