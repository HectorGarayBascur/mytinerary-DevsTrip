import '../styles/Carousel.css'
import Arrow from './Arrow'
import { useEffect, useState } from 'react'

export default function Carousel(props) {
    const range = props.range
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const items = props.data
    const interval = props.interval * 1000

    const itemView = (item) => (
        <div key={item._id} className='item'>
            <img src={item.url} alt={item.title} />
            <p>{item.title}</p>
        </div>
    )

    useEffect(() => {

        let id = setInterval(function () {
            next()
        }, interval)

        setIntervalId(id)

        return () => clearInterval(intervalId);
        // eslint-disable-next-line
    }, [start])

    function previous() {
        if (start >= range) {
            setStart(start - range)
            setEnd(end - range)
        }
    }

    function next() {
        if (end < items.length) {
            setStart(start + range)
            setEnd(end + range)
        } else {
            setStart(0)
            setEnd(range)
        }
    }

    return (
        <div>
            <div className='container-carousel'>
                <div>
                    <h2>Popular Cities</h2>
                </div>
                <div className='slide'>
                    <div>
                        <Arrow icon={"/arrowleft.png"} click={previous} />
                    </div>
                    <div className='slide2'>
                        {items.slice(start, end).map(itemView)}
                    </div>
                    <div>
                        <Arrow icon={"/arrowright.png"} click={next} />
                    </div>
                </div>
            </div>
        </div>
    )
}
