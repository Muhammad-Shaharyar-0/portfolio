import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { track } from '../../analytics'
import './ProjectContainer.css'

const ProjectContainer = ({ project, highlighted, onPlay, onBreakdown }) => {
  const {
    id, title, kind, description, role, facts, image, placeholder, fit, position, background, video, tags,
    links, breakdown,
  } = project
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
      <span className='project__code-mark'>{placeholder ? placeholder.mark : 'C++'}</span>
      <span>{placeholder ? placeholder.text : 'Source on GitHub'}</span>
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
        {role && (
          <p className='project__role'>
            <span>My role</span> {role}
          </p>
        )}
        <p className='project__desc'>{description}</p>
        {facts && (
          <dl className='project__facts'>
            {facts.map(([label, value]) => (
              <div key={label} className='project__fact'>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
        <ul className='project__tags'>
          {tags.map((tag) => (
            <li key={tag} className='project__tag'>
              {tag}
            </li>
          ))}
        </ul>
        {(links.length > 0 || breakdown) && (
          <div className='project__links'>
            {breakdown && (
              <button
                type='button'
                className='project__link project__link--primary'
                onClick={() => onBreakdown(project)}
              >
                More details
              </button>
            )}
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
