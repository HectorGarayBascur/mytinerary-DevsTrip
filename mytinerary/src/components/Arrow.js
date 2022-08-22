function Arrow(props) {
    if(!props.icon) {
        throw new Error('String is required for icon property')
    }
    if (!props.click) {
        throw new Error('Function is required for click property')
    }

    return (
        <button className="Arrow-button" onClick={props.click}>
            {props.icon}
        </button>
    )
}

export default Arrow