import { useCallback, useEffect, useRef, useState } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import { about, projects, filterOrder, filterLabels } from '../../portfolio'
import { track } from '../../analytics'
import useSectionTracking from '../../useSectionTracking'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import VideoModal from '../VideoModal/VideoModal'
import BreakdownModal from '../BreakdownModal/BreakdownModal'
import './Projects.css'

const Projects = ({ request }) => {
  const sectionRef = useRef(null)
  const [filter, setFilter] = useState('All')
  const [video, setVideo] = useState(null)
  const [detail, setDetail] = useState(null)
  const [highlight, setHighlight] = useState(null)
  useSectionTracking(sectionRef, 'projects')

  // Filters that match exactly the same projects are merged into one chip.
  const idsOf = (key) =>
    projects
      .filter((p) => p.keys.includes(key))
      .map((p) => p.id)
      .join()
  const groups = []
  filterOrder.forEach((key) => {
    const sig = idsOf(key)
    if (!sig) return
    const label = filterLabels[key] || key
    const group = groups.find((g) => g.sig === sig)
    if (group) group.labels.push(label)
    else groups.push({ key, sig, labels: [label] })
  })
  const canonical = (key) => {
    const group = groups.find((g) => g.sig === idsOf(key))
    return group ? group.key : key
  }
  const visible = filter === 'All' ? projects : projects.filter((p) => p.keys.includes(filter))

  // Requests from the Skills section: filter by a skill, or jump to one project.
  useEffect(() => {
    if (!request) return undefined
    if (request.type === 'filter') {
      setFilter(canonical(request.key))
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
  const openDetail = useCallback((project) => {
    track(`breakdown/${project.id}`, `Breakdown: ${project.title}`)
    setDetail(project)
  }, [])
  const closeDetail = useCallback(() => setDetail(null), [])

  return (
    <section id='projects' className='section projects' ref={sectionRef}>
      <div className='eyebrow'>I · Selected work</div>
      <h2 className='section__title'>Projects</h2>
      <p className='section__intro'>
        Filter by what each project was built with. Click a thumbnail to watch the demo, or open more details to see what I built.
      </p>

      <div className='projects__filters' role='group' aria-label='Filter projects by skill'>
        <button
          type='button'
          className={`chip${filter === 'All' ? ' chip--active' : ''}`}
          aria-pressed={filter === 'All'}
          onClick={() => pick('All')}
        >
          All
        </button>
        {groups.map((group) => (
          <button
            key={group.key}
            type='button'
            className={`chip${filter === group.key ? ' chip--active' : ''}`}
            aria-pressed={filter === group.key}
            onClick={() => pick(group.key)}
          >
            {group.labels.join(' / ')}
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
            onBreakdown={openDetail}
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
      {detail && <BreakdownModal project={detail} onClose={closeDetail} />}
    </section>
  )
}

export default Projects
