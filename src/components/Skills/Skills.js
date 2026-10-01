import { useCallback, useRef, useState } from 'react'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { projects, skillGroups } from '../../portfolio'
import { track } from '../../analytics'
import useSectionTracking from '../../useSectionTracking'
import SkillModal from '../SkillModal/SkillModal'
import Certifications from '../Certifications/Certifications'
import './Skills.css'

const countOf = (key) => projects.filter((p) => p.keys.includes(key)).length

const Skills = ({ onFilter, onShowProject }) => {
  const sectionRef = useRef(null)
  const [skill, setSkill] = useState(null)
  useSectionTracking(sectionRef, 'skills')

  const close = useCallback(() => setSkill(null), [])

  const open = (item) => {
    track(`skill/${item.label}`, `Skill: ${item.label}`)
    setSkill(item)
  }

  const showProject = (id, skillLabel) => {
    track(`skill-project/${id}`, `Project from skill (${skillLabel})`)
    setSkill(null)
    onShowProject(id)
  }

  const filterBySkill = (key, skillLabel) => {
    track(`skill-filter/${skillLabel}`, `Filter from skill: ${skillLabel}`)
    setSkill(null)
    onFilter(key)
  }

  const renderChip = (item) => {
    if (item.href) {
      return (
        <a
          href={item.href}
          target='_blank'
          rel='noopener noreferrer'
          className='chip skills__chip'
          onClick={() => track(`cert/${item.label}`, `Certificate: ${item.label}`)}
        >
          {item.label}
          <span className='skills__cert'>
            Certificate
            <OpenInNewIcon style={{ fontSize: 14 }} />
          </span>
        </a>
      )
    }
    if (item.key) {
      return (
        <button type='button' className='chip skills__chip' onClick={() => open(item)}>
          {item.label}
          <span className='skills__count'>{countOf(item.key)}</span>
        </button>
      )
    }
    return <span className='skills__static'>{item.label}</span>
  }

  return (
    <section id='skills' className='section skills' ref={sectionRef}>
      <div className='eyebrow'>II · Toolbox</div>
      <h2 className='section__title'>Skills</h2>
      <p className='section__intro'>
        Select a skill to see every project where I used it. The number is how many.
      </p>

      <div className='skills__grid'>
        {skillGroups.map((group) => (
          <div key={group.name} className='skills__group'>
            <h3 className='skills__group-title'>{group.name}</h3>
            <ul className='skills__list'>
              {group.items.map((item) => (
                <li key={item.label}>
                  {renderChip(item)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Certifications />

      {skill && (
        <SkillModal
          skill={skill}
          onClose={close}
          onShowProject={showProject}
          onFilter={filterBySkill}
        />
      )}
    </section>
  )
}

export default Skills
