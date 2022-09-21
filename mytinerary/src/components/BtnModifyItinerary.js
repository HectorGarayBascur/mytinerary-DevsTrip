import { Link as LinkRouter } from 'react-router-dom'
import '../styles/Itinerary.css'

export default function BtnModifyItinerary() {
    return (
        <div className='container-btn-mod-itinerary'>
            <LinkRouter to='/modifyitinerary' className='btn-mod-itinerary'>Modify Itineraries</LinkRouter>
        </div>
    )
}