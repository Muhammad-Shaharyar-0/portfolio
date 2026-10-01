import { useEffect, useRef } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { projects } from '../../portfolio'
import '../VideoModal/VideoModal.css'
import './SkillModal.css'

const imageUrl = (path) => `${process.env.PUBLIC_URL}${path}`

const SkillModal = ({ skill, onClose, onShowProject, onFilter }) => {
  const closeRef = useRef(null)
  const list = projects.filter((p) => p.keys.includes(skill.key))

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
    <div className='modal' role='dialog' aria-modal='true' aria-label={skill.label}>
      <button type='button' className='modal__backdrop' aria-label='Close' onClick={onClose} />
      <div className='modal__box'>
        <div className='modal__head'>
          <div>
            <div className='skillmodal__title'>{skill.label}</div>
            <div className='skillmodal__count'>
              Used in {list.length} featured {list.length === 1 ? 'project' : 'projects'}
            </div>
          </div>
          <button
            type='button'
            ref={closeRef}
            className='modal__close'
            aria-label='Close'
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <div className='skillmodal__body'>
          {list.map((project) => (
            <a
              key={project.id}
              href={`#proj-${project.id}`}
              className='skillmodal__row'
              onClick={() => onShowProject(project.id, skill.label)}
            >
              {project.image ? (
                <img
                  src={imageUrl(project.image)}
                  alt=''
                  className='skillmodal__thumb'
                  style={{
                    objectFit: project.fit,
                    objectPosition: project.position,
                    background: project.background,
                  }}
                />
              ) : (
                <div className='skillmodal__thumb skillmodal__thumb--code'>C++</div>
              )}
              <div className='skillmodal__text'>
                <div className='skillmodal__name'>{project.title}</div>
                <div className='skillmodal__kind'>{project.kind}</div>
              </div>
              <span className='skillmodal__go'>
                View project
                <ArrowForwardIcon style={{ fontSize: 16 }} />
              </span>
            </a>
          ))}
          {list.length === 0 && (
            <p className='skillmodal__empty'>
              Not in the featured projects yet. More academic and personal work is on my GitHub.
            </p>
          )}
          {list.length > 0 && (
            <button
              type='button'
              className='btn btn--primary skillmodal__filter'
              onClick={() => onFilter(skill.key, skill.label)}
            >
              Filter projects by this skill
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SkillModal
