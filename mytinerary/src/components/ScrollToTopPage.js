import { Link as LinkRouter } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function ScrollToTopPage() {
  const { pathname } = useLocation()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <div className='scroll-top'>
      <LinkRouter to={pathname}><img className='icon-top' src="../arrowtop.png" alt=""></img></LinkRouter>
    </div>
  )
}