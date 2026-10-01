import skull from '../../Images/logo-skull.png'
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header'>
      <div className='header__inner'>
        <a href={homepage || '#top'} className='header__logo' aria-label='Home'>
          <img src={skull} alt='' aria-hidden='true' className='header__skull' width='28' height='28' />
          <span>
            <span className='header__logo-mark'>{title}</span>.
          </span>
        </a>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
