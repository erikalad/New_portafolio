import ant from './../../Assest/skills/ant.svg'
import bs from './../../Assest/skills/Bootstrap.png'
import cloudinary from './../../Assest/skills//cloudinary.png'
import figma from './../../Assest/skills/figma.png'
import git from './../../Assest/skills/git.png'
import postman from './../../Assest/skills/postman.webp'
import paypal from './../../Assest/skills/paypal.png'
import auth from './../../Assest/skills/auth0.png'

export const images = [ant, bs, cloudinary, figma, git, postman, paypal,auth]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex