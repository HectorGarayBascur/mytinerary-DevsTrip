import '../styles/Itinerary.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Comments from './Comments';
import Activities from './Activities';
import { useEffect, useState } from 'react'
import { useGetActivitiesQuery } from '../features/activitiesAPI';
import { useGetCommentsQuery } from '../features/commentsAp';


export default function Itinerary({ itinerary }) {
    const { data: activities } = useGetActivitiesQuery(itinerary._id)
    const { data: users } = useGetCommentsQuery(itinerary._id)

    const [open, setOpen] = useState(false)
    const openComments = () => {
        if (open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

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
            <div className="container-comments">
                <h2>Comments</h2>
                <img className="icon-despleg" onClick={openComments} src="https://cdn-icons-png.flaticon.com/512/3519/3519316.png" alt="" width='25px'></img>
                <div className='container2-comments'>
                    {
                        open
                            ? <div className='container3-comments'>
                                {users?.response.map(user =>
                                    <Comments user={user} key={user._id} />
                                )
                                }
                            </div>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}