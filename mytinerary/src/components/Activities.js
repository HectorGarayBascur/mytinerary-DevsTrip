import '../styles/Activities.css'

export default function Activities({ activity }) {

    return (
            <div>
                <div className='activity1'>
                    <div className='img-activity'>
                        <img src={activity.photo} alt=""></img>
                    </div>
                    <h3>{activity.name}</h3>
                </div>
            </div>
    )
}