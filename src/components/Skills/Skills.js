import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <div className='skills__categories'>
        {skills.map((group) => (
          <div key={uniqid()} className='skills__category'>
            {/* Category title */}
            <h4 className='skills__category-title'>
              {group.category}
            </h4>
            {/* Skills in this category */}
            <ul className='skills__list'>
              {group.items.map((skill) => (
                <li key={uniqid()} className='skills__list-item'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills