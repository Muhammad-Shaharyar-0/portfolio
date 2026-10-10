import { useEffect, useRef } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import '../VideoModal/VideoModal.css'
import './BreakdownModal.css'

const BreakdownModal = ({ project, onClose }) => {
  const closeRef = useRef(null)
  const { title, role, breakdown } = project

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    if (closeRef.current) closeRef.current.focus()
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className='modal' role='dialog' aria-modal='true' aria-label={`${title} more details`}>
      <button
        type='button'
        className='modal__backdrop'
        aria-label='Close more details'
        onClick={onClose}
      />
      <div className='modal__box breakdown'>
        <div className='modal__head'>
          <div>
            <div className='breakdown__eyebrow'>More details</div>
            <div className='modal__title breakdown__title'>{title}</div>
            {role && <div className='breakdown__role'>{role}</div>}
          </div>
          <button
            type='button'
            ref={closeRef}
            className='modal__close'
            aria-label='Close more details'
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>
        <div className='breakdown__body'>
          {breakdown.about && (
            <section className='breakdown__section'>
              <h4 className='breakdown__heading'>Description</h4>
              <p className='breakdown__about'>{breakdown.about}</p>
            </section>
          )}
          {breakdown.tech && (
            <section className='breakdown__section'>
              <h4 className='breakdown__heading'>Technology and skills</h4>
              <ul className='breakdown__tech'>
                {breakdown.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          <h4 className='breakdown__heading breakdown__heading--lead'>Key features I worked on</h4>
          {breakdown.features.map((feature) => (
            <div key={feature.title} className='breakdown__feature'>
              <h5 className='breakdown__subheading'>{feature.title}</h5>
              <ul className='breakdown__list'>
                {feature.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BreakdownModal
