import '../styles/Arrow.css'

function Arrow(props) {
    if(!props.icon) {
        throw new Error('String is required for icon property')
    }
    if (!props.click) {
        throw new Error('Function is required for click property')
    }

    return (
        <button className="Arrow-button" onClick={props.click}>
           <img className="Arrow-carousel" src={props.icon} alt="arrow" />
        </button>
    )
}

export default Arrow