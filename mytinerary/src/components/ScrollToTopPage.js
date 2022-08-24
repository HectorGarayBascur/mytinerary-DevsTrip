import { Link as LinkRouter } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function ScrollToTopPage() {
  const { pathname } = useLocation()
  window.scrollTo({top:0 , behavior:'smooth'})
  return (
    <div>
      <LinkRouter to={pathname} className='A-Welcome'>Go to top</LinkRouter>
    </div>
  )
}