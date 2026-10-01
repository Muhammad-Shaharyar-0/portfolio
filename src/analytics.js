import { analytics } from './portfolio'

// Privacy-friendly analytics through GoatCounter (no cookies, no consent banner).
// Page views are counted automatically. track() records named events, shown in the
// GoatCounter dashboard under their path, e.g. "video/Animalia" or "link/linkedin".

let enabled = false
const queue = []

const send = (item) => {
  window.goatcounter.count({ path: item.path, title: item.title, event: true })
}

const flush = () => {
  while (queue.length) send(queue.shift())
}

export const initAnalytics = () => {
  const code = analytics.goatcounterCode
  if (!code || typeof document === 'undefined') return
  enabled = true
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://gc.zgo.at/count.js'
  script.dataset.goatcounter = `https://${code}.goatcounter.com/count`
  script.onload = flush
  document.head.appendChild(script)
}

export const track = (path, title) => {
  if (!enabled) return
  const item = { path, title: title || path }
  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    send(item)
  } else {
    queue.push(item)
  }
}
