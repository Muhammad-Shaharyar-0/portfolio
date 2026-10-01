import { about } from '../../portfolio'
import { track } from '../../analytics'
import './Navbar.css'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => (
  <nav className='nav' aria-label='Main'>
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className='nav__link'
        onClick={() => track(`nav/${link.label.toLowerCase()}`, `Nav: ${link.label}`)}
      >
        {link.label}
      </a>
    ))}
    {about.resume && (
      <a
        href={about.resume}
        target='_blank'
        rel='noopener noreferrer'
        className='nav__resume'
        onClick={() => track('link/resume-nav', 'Resume (nav)')}
      >
        Resume
      </a>
    )}
  </nav>
)

export default Navbar
