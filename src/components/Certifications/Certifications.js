import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { certifications } from '../../portfolio'
import { track } from '../../analytics'
import './Certifications.css'

const Certifications = () => (
  <div className='certs'>
    <h3 className='certs__title'>Certifications</h3>
    <div className='certs__grid'>
      {certifications.map((cert) => (
        <div key={cert.id} className='cert'>
          <div className='cert__provider'>{cert.provider}</div>
          <div className='cert__name'>{cert.title}</div>
          <div className='cert__detail'>{cert.detail}</div>
          <a
            href={cert.url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn--ghost cert__link'
            onClick={() => track(`cert/${cert.id}`, `Certificate: ${cert.title}`)}
          >
            View certificate
            <OpenInNewIcon style={{ fontSize: 15 }} />
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default Certifications
