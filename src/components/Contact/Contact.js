import { useRef } from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import hat from '../../Images/calling-hat.png'
import { about, contact } from '../../portfolio'
import { track } from '../../analytics'
import useSectionTracking from '../../useSectionTracking'
import './Contact.css'

const Contact = () => {
  const sectionRef = useRef(null)
  useSectionTracking(sectionRef, 'contact')

  if (!contact.email) return null

  return (
    <section id='contact' className='section contact' ref={sectionRef}>
      <div className='contact__panel'>
        <div className='contact__text'>
          <h2 className='contact__title'><span>Let&apos;s talk</span></h2>
          <p>Interested in working together? Get in touch.</p>
        </div>
        <img src={hat} alt='' aria-hidden='true' className='contact__card' width='140' height='140' />
        <div className='contact__buttons'>
          <a
            href={`mailto:${contact.email}`}
            className='btn btn--primary'
            title='Toss a coin to your Witcher'
            onClick={() => track('link/email-contact', 'Email (contact)')}
          >
            <MailOutlineIcon fontSize='small' />
            {contact.email}
          </a>
          <a
            href={about.social.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn--ghost'
            onClick={() => track('link/linkedin-contact', 'LinkedIn (contact)')}
          >
            LinkedIn
          </a>
          <a
            href={about.social.github}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn--ghost'
            onClick={() => track('link/github-contact', 'GitHub (contact)')}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
