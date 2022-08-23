import '../styles/Welcome.css'
import {Link as LinkRouter} from 'react-router-dom'

const pages = [
  {name:'Home' ,to:'/'},
  {name:'UnderConstruction' ,to:'/underconstruction'},
  {name:'Cities' ,to:'/cities'},
  {name:'New Cities' ,to:'/newcities'},
]

const link = (page)=> <LinkRouter className='Header-link' to= {page.to}>{page.name}</LinkRouter>

export default function Header() {
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
      <div>
        <div className='container'>
          {pages.map(link)}
        
        </div>
      </div>
    </div>
  )
}


