import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'

import Login from './Login'
import { useAuth } from '../hooks/useAuth';

import '../styles/Header.css'

const user = JSON.parse(localStorage.getItem('user'))

const pages = [
  { _id: 1, name: 'Home', to: '/' },
  { _id: 2, name: 'Cities', to: '/cities' },
  { _id: 3, name: 'New Cities', to: '/newcities', private: true },
  { _id: 4, name: 'New Users', to: '/newusers', private: true },
  { _id: 5, name: 'Edit Cities', to: '/editcities', private: true },
  // {_id:4, name: 'UnderConstruction', to: '/underconstruction' },
]

if (user) {
  pages.push({ _id: 6, name: 'MyTineraries', to: '/mytineraries/' + user.id })
} else {
  pages.push({ _id: 6, name: 'MyTineraries', to: '/mytineraries/' })
}
console.log(pages)
const link = (page) => <LinkRouter className='Header-link' key={page._id} to={page.to}>{page.name}</LinkRouter>

export default function Header() {
  const title = "Welcome to MyTinerary"
  const slogan = "Find your perfect trip, designed by insiders who know and love their cities!"
  const { user: currentUser } = useAuth();
  const admin = currentUser?.role === 'admin';

  const [open, setOpen] = useState(false)
  const openH = () => {
    if (open === true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const links = [];
  pages.forEach(page => {
    if (page.private) {
      if (admin) {
        links.push(page);
      }
    } else {
      links.push(page);
    }
  });

  return (
    <div className='Main-Welcome'>
      <div className='container-logo'>
        <img src='/Logo.png' alt="logo" />
      </div>
      <div className="container-welcome">
        <h1 className='H1-Welcome'>{title}</h1>
        <p className='P-Welcome'>{slogan}</p>
      </div>
      <div className='navbar'>
        {links.map(link)}
      </div>
      <div className="container-hamburger">
        <img onClick={openH} src="/icon-hamburger.png" alt="" width='25px'></img>
        <div>
          {
            open
              ? <div className='pages-hamburguer'>
                {links.map(link)}
              </div>
              : null
          }
        </div>
      </div>
      <Login />
    </div>
  )
}