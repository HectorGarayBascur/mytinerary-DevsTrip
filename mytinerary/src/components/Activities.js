import '../styles/Activities.css'

export default function Activities({ activity }) {
    return (
        <div className='container-activities-padre'>
            <div className='container-activities'>
                <div className='activity1'>
                    <img src={activity.photo} alt=""></img>
                    <h3>{activity.name}</h3>
                </div>
            </div>
        </div>
    )
}