import '../styles/UnderConstruction.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function UnderConstruction() {
  const buttonText = "Go back to cities"
  return (
    <div className="videos-underconstruction">
        <video className="video-underconstruction" autoPlay muted loop src="/Underconstruction.mp4"></video>
      <div className="overlay-underconstruction">
        <p className="p-video-underconstruction">Don't be mad, other cities are waiting for you!</p>
        <LinkRouter to='/cities' className='A-Welcome-underconstruction'>{buttonText.toUpperCase()}</LinkRouter>
      </div>
    </div>
  )
}