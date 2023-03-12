import image1 from '../../Assest/skills/Bootstrap.png'
import image2 from '../../Assest/skills/Bootstrap.png'
import image3 from '../../Assest/skills/Bootstrap.png'
import image4 from '../../Assest/skills/Bootstrap.png'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex