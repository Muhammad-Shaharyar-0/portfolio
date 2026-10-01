import { useEffect, useState } from 'react'
import './ScrollToTop.css'

const Eagle = () => (
  <svg viewBox='0 0 64 48' width='34' height='26' aria-hidden='true' focusable='false'>
    <path
      fill='currentColor'
      d='M32 6c1.800 0 3 1.400 3 3.200l5-1.800-4.200 4.200c1 1.600 2 3 3.200 4.200 3-4.800 8.600-9.200 17-11.600-3 3.600-5.400 7.600-6.800 12.200 4.600-2.400 8.600-3.400 12.800-3.200-5 2.800-8.800 6-11.600 10.200-3.800 5.600-8 8.800-13 9.800L37 40l-5 5-5-5-1.600-8c-5-1-9.200-4.200-13-9.800C9.600 18 5.800 14.800.8 12c4.200-.2 8.200.8 12.800 3.200-1.400-4.600-3.800-8.600-6.800-12.200 8.400 2.400 14 6.800 17 11.600 1.200-1.200 2.200-2.600 3.200-4.200L24 7.400l5 1.800C29 7.400 30.200 6 32 6z'
    />
  </svg>
)

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      setIsVisible(window.scrollY > 500)

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top' aria-label='Back to top' title='Leap of faith'>
        <Eagle />
      </a>
    </div>
  ) : null
}

export default ScrollToTop
