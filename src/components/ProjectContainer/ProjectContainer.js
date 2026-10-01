import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { track } from '../../analytics'
import './ProjectContainer.css'

const ProjectContainer = ({ project, highlighted, onPlay }) => {
  const { id, title, kind, description, image, fit, position, background, video, tags, links } =
    project
  const imageSrc = image ? `${process.env.PUBLIC_URL}${image}` : null

  const thumb = imageSrc ? (
    <img
      src={imageSrc}
      alt=''
      className='project__image'
      style={{ objectFit: fit, objectPosition: position }}
      loading='lazy'
      decoding='async'
    />
  ) : (
    <div className='project__code'>
      <span className='project__code-mark'>C++</span>
      <span>Source on GitHub</span>
    </div>
  )

  return (
    <article
      id={`proj-${id}`}
      className={`project${highlighted ? ' project--highlight' : ''}`}
    >
      {video ? (
        <button
          type='button'
          className='project__thumb project__thumb--play'
          style={{ background }}
          onClick={() => onPlay(project)}
          aria-label={`Watch demo of ${title}`}
        >
          {thumb}
          <span className='project__veil'>
            <span className='project__play'>
              <PlayArrowIcon fontSize='large' />
            </span>
          </span>
          <span className='project__watch'>Watch demo</span>
        </button>
      ) : (
        <div className='project__thumb' style={{ background }}>
          {thumb}
        </div>
      )}

      <div className='project__body'>
        <div className='project__kind'>{kind}</div>
        <h3 className='project__title'>{title}</h3>
        <p className='project__desc'>{description}</p>
        <ul className='project__tags'>
          {tags.map((tag) => (
            <li key={tag} className='project__tag'>
              {tag}
            </li>
          ))}
        </ul>
        {links.length > 0 && (
          <div className='project__links'>
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='project__link'
                onClick={() => track(`link/${id}/${link.label}`, `${title}: ${link.label}`)}
              >
                {link.label}
                <OpenInNewIcon style={{ fontSize: 15 }} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectContainer
