import { Link as LinkRouter } from 'react-router-dom'
import '../styles/City.css'

export default function BtnNewItinerary() {

    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
        return (
            <LinkRouter to='/newitinerary' className='btn-new-itinerary'>Create new Itinerary</LinkRouter>
        )
    }
}
