import { render } from 'react-dom'
import App from './App'
import { initAnalytics } from './analytics'
import './index.css'

initAnalytics()

// eslint-disable-next-line no-console
console.log(
  '%cNothing is true, everything is permitted. %c Also: toss a coin to your Witcher.',
  'color:#f5c542;font-weight:bold',
  'color:#d1262d'
)

render(<App />, document.getElementById('root'))
