import '../styles/Videos.css'

export default function Videos() {
  const buttonText = "Click here !"
  return (
    <div className="videos">
      <video className="video-main" autoPlay muted loop src="/MytineraryHero.mp4"></video>
      <div class="overlay">
        <p className="p-video">Find your next trip</p>
        <a href="#" className='A-Welcome'>{buttonText.toUpperCase()}</a>
      </div>
    </div>
  )
}
