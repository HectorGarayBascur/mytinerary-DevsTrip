import '../styles/Itinerary.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Itinerary({ itinerary }) {
    console.log(itinerary)
    return (
        <>
            <div className="data-card">
                <h2>{itinerary.name}</h2>
                <div className='data-p-d'>
                    <p>Price: ${itinerary.price}</p>
                    <p>Duration:{itinerary.duration}</p>
                </div>
                <p>likes{itinerary.likes}</p>
                <p>tags{itinerary.tags}</p>
            </div>
        </>

    )
}