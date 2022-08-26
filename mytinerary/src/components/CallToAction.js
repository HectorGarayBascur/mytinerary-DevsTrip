import '../styles/CallToAction.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function Videos() {
  const buttonText = "Click here !"
  return (
    <div className="videos-Call">
      <div className="call-column">
        <video className="video-main" autoPlay muted loop src="/MytineraryHero.mp4"></video>
        <div className="overlay">
          <p className="p-video">Find your next trip</p>
          <LinkRouter to='/cities' className='A-Welcome'>{buttonText.toUpperCase()}</LinkRouter>
        </div>
      </div>
    </div>
  )
}
