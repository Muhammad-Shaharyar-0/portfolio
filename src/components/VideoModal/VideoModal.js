import { useEffect, useRef } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import './VideoModal.css'

const youtubeId = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  )
  return match ? match[1] : null
}

// A video is either a YouTube link (embedded) or a file in public/videos.
const VideoModal = ({ project, onClose }) => {
  const closeRef = useRef(null)
  const { video, title } = project
  const ytId = video.startsWith('http') ? youtubeId(video) : null
  const fileSrc = video.startsWith('http') ? video : `${process.env.PUBLIC_URL}/videos/${video}`

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    if (closeRef.current) closeRef.current.focus()
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className='modal' role='dialog' aria-modal='true' aria-label={`${title} demo`}>
      <button type='button' className='modal__backdrop' aria-label='Close video' onClick={onClose} />
      <div className='modal__box modal__box--video'>
        <div className='modal__head'>
          <div className='modal__title'>{title} demo</div>
          <button
            type='button'
            ref={closeRef}
            className='modal__close'
            aria-label='Close video'
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>
        <div className='modal__video-wrap'>
          {ytId ? (
            <iframe
              className='modal__video'
              src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0`}
              title={`${title} demo`}
              allow='autoplay; encrypted-media; picture-in-picture; fullscreen'
              allowFullScreen
            />
          ) : (
            <video className='modal__video' controls autoPlay playsInline preload='metadata'>
              <source src={fileSrc} />
              <track
                kind='captions'
                src={`${process.env.PUBLIC_URL}/captions/empty.vtt`}
                srcLang='en'
                label='captions'
                default
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoModal
