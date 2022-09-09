import '../styles/Itinerary.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Comments from './Comments';
import Activities from './Activities';
import { useEffect, useState } from 'react'
import { useGetActivitiesQuery } from '../features/activitiesAPI';


export default function Itinerary({ itinerary }) {
    const { data: activities } = useGetActivitiesQuery(itinerary._id)

    console.log(itinerary)
    return (

        <div className='container-padre-itinerary'>
            <div className="data-card">
                <h2>{itinerary.name}</h2>
                <div className='data-p-d'>
                    <p>Price: ${itinerary.price}</p>
                    <p>Duration:{itinerary.duration}</p>
                </div>
                <p>likes{itinerary.likes}</p>
                <p>tags{itinerary.tags}</p>
            </div>
            <div className='container-activities'>
                {activities?.response.map(activity =>
                    // console.log(itinerary)
                    <Activities activity={activity} key={activity._id} />
                )
                }
            </div>
            <Comments />
        </div>
    )
}