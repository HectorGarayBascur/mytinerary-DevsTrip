import '../styles/Itinerary.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Itinerary() {

    const { id } = useParams()
    console.log({ id })
    const [itineraryData, setItineraryData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/itineraries/'+id)
            .then(response => { 
                setItineraryData(response.data)
                console.log(response.data)
            })
    }, []);

    return (
        <div className="data-card">
            <h2>{itineraryData.name}</h2>
            <h4>{itineraryData.city}</h4>
            <div className='data-p-d'>
                <p>Price: ${itineraryData.price}</p>
                <p>Duration: {itineraryData.name}</p>
            </div>
            <p>{itineraryData.likes}</p>
            <p>{itineraryData.tags}</p>
        </div>
    )
}