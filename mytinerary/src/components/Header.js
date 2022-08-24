import '../styles/Welcome.css'
import { Link as LinkRouter } from 'react-router-dom'
import Login from './Login'

const pages = [
  {_id:1, name: 'Home', to: '/' },
  {_id:2, name: 'Cities', to: '/cities' },
  {_id:3, name: 'New Cities', to: '/newcities' },
  // {_id:4, name: 'UnderConstruction', to: '/underconstruction' },
]

const link = (page) => <LinkRouter className='Header-link' key={page._id} to={page.to}>{page.name}</LinkRouter>

export default function Header() {
  const title = "Welcome to MyTinerary"
  const slogan = "Find your perfect trip, designed by insiders who know and love their cities!"
  return (
    <div className='Main-Welcome'>
      <div className='container-logo'>
        <img src='/Logo.png' alt="logo"/>
      </div>
      <div className="container-welcome">
        <h1 className='H1-Welcome'>{title}</h1>
        <p className='P-Welcome'>{slogan}</p>
      </div>
      <div className='navbar'>
        {pages.map(link)}
      </div>
      <Login />
    </div>
  )
}


