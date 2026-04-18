import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import footerImg from '../../Images/persona3.png'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <div className='header__wrapper'>
      <header className='header center'>
        <h3>

          {homepage ? (
            <a href={homepage} className='link'>
              {title} ☠️
            </a>
          ) : (
            title
          )}
        </h3>
        <Navbar />
      </header>
    </div>
  )
}

export default Header