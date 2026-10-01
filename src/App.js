import { useCallback, useState } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  // Lets the Skills section ask the Projects section to filter or jump to a project.
  const [request, setRequest] = useState(null)
  const filterBySkill = useCallback(
    (key) => setRequest({ type: 'filter', key, at: Date.now() }),
    []
  )
  const showProject = useCallback(
    (id) => setRequest({ type: 'show', id, at: Date.now() }),
    []
  )

  return (
    <div id='top' className='app'>
      <Header />
      <main>
        <About />
        <Projects request={request} />
        <Skills onFilter={filterBySkill} onShowProject={showProject} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
