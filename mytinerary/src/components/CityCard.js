import "../styles/CityCard.css"

export default function CityCard(props) {
    return (
        <div className="card-cities">
            <div className='item-cities'>
                <img src={props.url} alt={props.title} />
            </div>
            <div className="text-cities">
                <p>{props.title}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

