import './Footer.css'
import footerImg from '../../Images/persona1.png'

const Footer = () => (
  <footer className='footer'>
    
    <a
      href='https://github.com/Muhammad-Shaharyar-0/portfolio'
      className='link footer__link'
    >
      Created By Muhammad Shaharyar
    </a>
    <img src={footerImg} alt='' className='footer__image' />
  </footer>
)

export default Footer
