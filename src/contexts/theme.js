import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('dark')

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => setThemeName(e.matches ? 'dark' : 'light')
    onChange(darkMediaQuery)
    darkMediaQuery.addEventListener('change', onChange)
    return () => darkMediaQuery.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = () => setThemeName((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
