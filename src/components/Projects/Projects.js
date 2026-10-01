import { useCallback, useEffect, useRef, useState } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import { about, projects, filterOrder, filterLabels } from '../../portfolio'
import { track } from '../../analytics'
import useSectionTracking from '../../useSectionTracking'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import VideoModal from '../VideoModal/VideoModal'
import './Projects.css'

const Projects = ({ request }) => {
  const sectionRef = useRef(null)
  const [filter, setFilter] = useState('All')
  const [video, setVideo] = useState(null)
  const [highlight, setHighlight] = useState(null)
  useSectionTracking(sectionRef, 'projects')

  const countOf = (key) => projects.filter((p) => p.keys.includes(key)).length
  const chips = ['All', ...filterOrder.filter((key) => countOf(key) > 0)]
  const visible = filter === 'All' ? projects : projects.filter((p) => p.keys.includes(filter))

  // Requests from the Skills section: filter by a skill, or jump to one project.
  useEffect(() => {
    if (!request) return undefined
    if (request.type === 'filter') {
      setFilter(request.key)
      setHighlight(null)
      const el = document.getElementById('projects')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      return undefined
    }
    setFilter('All')
    setHighlight(request.id)
    const scrollTimer = setTimeout(() => {
      const el = document.getElementById(`proj-${request.id}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 60)
    const clearTimer = setTimeout(() => setHighlight(null), 5000)
    return () => {
      clearTimeout(scrollTimer)
      clearTimeout(clearTimer)
    }
  }, [request])

  const pick = (key) => {
    setFilter(key)
    setHighlight(null)
    if (key !== 'All') track(`filter/${key}`, `Filter: ${key}`)
  }

  const play = useCallback((project) => {
    track(`video/${project.id}`, `Video: ${project.title}`)
    setVideo(project)
  }, [])
  const closeVideo = useCallback(() => setVideo(null), [])

  return (
    <section id='projects' className='section projects' ref={sectionRef}>
      <div className='eyebrow'>I · Selected work</div>
      <h2 className='section__title'>Projects</h2>
      <p className='section__intro'>
        Filter by what each project was built with. Click a thumbnail to watch the demo.
      </p>

      <div className='projects__filters' role='group' aria-label='Filter projects by skill'>
        {chips.map((key) => (
          <button
            key={key}
            type='button'
            className={`chip${filter === key ? ' chip--active' : ''}`}
            aria-pressed={filter === key}
            onClick={() => pick(key)}
          >
            {filterLabels[key] || key}
          </button>
        ))}
      </div>

      <div className='projects__grid'>
        {visible.map((project) => (
          <ProjectContainer
            key={project.id}
            project={project}
            highlighted={highlight === project.id}
            onPlay={play}
          />
        ))}
      </div>

      <div className='projects__note'>
        <p>
          These are my featured projects. More work, including academic projects from my MSc in
          Games Development (with more C++) and personal projects, is on my GitHub.
        </p>
        <a
          href={about.social.github}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn--ghost'
          onClick={() => track('link/github-more', 'GitHub (more projects)')}
        >
          <GitHubIcon fontSize='small' />
          Browse GitHub
        </a>
      </div>

      {video && <VideoModal project={video} onClose={closeVideo} />}
    </section>
  )
}

export default Projects
