import '../styles/Welcome.css'

export default function Welcome() {
  const title = "Welcome to MyTinerary"
  const slogan = "Find your perfect trip, designed by insiders who know and love their cities!"
  return (
    <div className='Main-Welcome'>
      <div className='container-logo'>
        <img src='/Logo.png'/>
      </div>
      <div className="container-welcome">
        <h1 className='H1-Welcome'>{title}</h1>
        <p className='P-Welcome'>{slogan}</p>
      </div>
    </div>
  )
}


