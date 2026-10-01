import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import keyblade from '../../Images/keyblade.png'
import crown from '../../Images/crown.png'
import { about, contact } from '../../portfolio'
import { track } from '../../analytics'
import './About.css'

const imageUrl = (path) =>
  path && path.startsWith('/') ? `${process.env.PUBLIC_URL}${path}` : path

const About = () => {
  const { name, role, description, picture, currently, stats, resume, social } = about

  return (
    <section className='about'>
      <div className='about__top'>
        <div className='about__panel'>
          <div className='eyebrow'>{role}</div>
          <h1 className='about__name'>{name}</h1>
          <p className='about__desc'>{description}</p>
          <div className='about__buttons'>
            {resume && (
              <a
                href={resume}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn--primary'
                onClick={() => track('link/resume', 'Resume (hero)')}
              >
                <img src={keyblade} alt='' aria-hidden='true' className='btn__icon btn__icon--key' width='22' height='19' />
                Download resume
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn--ghost'
                onClick={() => track('link/linkedin', 'LinkedIn (hero)')}
              >
                <LinkedInIcon fontSize='small' />
                LinkedIn
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn--ghost'
                onClick={() => track('link/github', 'GitHub (hero)')}
              >
                <GitHubIcon fontSize='small' />
                GitHub
              </a>
            )}
            <a
              href={`mailto:${contact.email}`}
              className='btn btn--ghost'
              onClick={() => track('link/email', 'Email (hero)')}
            >
              <MailOutlineIcon fontSize='small' />
              Email me
            </a>
            {social.favouriteGames && (
              <a
                href={social.favouriteGames}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn--ghost'
                onClick={() => track('link/favourite-games', 'Favourite games')}
              >
                <img src={crown} alt='' aria-hidden='true' className='btn__icon' width='28' height='18' />
                Favourite games
              </a>
            )}
          </div>
        </div>

        <div className='about__side'>
          {picture && (
            <img
              src={imageUrl(picture)}
              alt={`Illustrated portrait of ${name}`}
              className='about__picture'
              width='540'
              height='360'
              decoding='async'
            />
          )}
          <div className='about__currently'>
            <div className='about__currently-title'>Currently…</div>
            {currently.map((item) => (
              <div key={item.title}>
                <div className='about__role-title'>{item.title}</div>
                <div className='about__role-place'>{item.place}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='about__stats'>
        {stats.map((stat) => (
          <div key={stat.value} className='about__stat'>
            <div className='about__stat-value'>{stat.value}</div>
            <div className='about__stat-label'>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
