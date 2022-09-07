import '../styles/Carousel.css'
import Arrow from './Arrow'
import { useEffect, useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'


export default function Carousel(props) {
    const range = props.range
    const limitSlides = (props.slides * range)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const items = props.data
    const interval = props.interval * 1000

    const itemView = (item) => (
        <div key={item._id}>
            <LinkRouter className='item' to='*'><img src={item.photo} alt={item.city} /></LinkRouter>
            <p className='p-carousel'>{item.city}</p>
        </div>
    )

    useEffect(() => {

        let id = setInterval(function () {
            next()
        }, interval)

        setIntervalId(id)

        return () => clearInterval(id);
        // eslint-disable-next-line
    }, [start])
    function previous() {
        if (start >= range) {
            setStart(start - range)
            setEnd(end - range)
        } else {
            setStart(limitSlides - range)
            setEnd(limitSlides)
        }
        clearInterval(intervalId)
    }

    function next() {
        if (start < limitSlides - range) {
            setStart(start + range)
            setEnd(end + range)
        } else {
            setStart(0)
            setEnd(range)
        }
        clearInterval(intervalId)
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
                        {items?.slice(start, end).map(itemView)}
                    </div>
                    <div>
                        <Arrow icon={"/arrowright.png"} click={next} />
                    </div>
                </div>
            </div>
        </div>
    )
}