import "../styles/CityCard.css"
import { Link as LinkRouter } from 'react-router-dom'

export default function CityCard(props) {
    return (
        <div className='container-cards'>
            <div className='container-card'>
                <figure className="snip0056">
                    <figcaption>
                        <h2>{props.city}</h2>
                        <p>Country: {props.country}</p>
                    </figcaption>
                    <img src={props.photo} className="img-card" alt="sample8" />
                    <div className="position"><LinkRouter to='*' className="city-card-btn">More info</LinkRouter></div>
                </figure>
            </div>
        </div>
    )
}

