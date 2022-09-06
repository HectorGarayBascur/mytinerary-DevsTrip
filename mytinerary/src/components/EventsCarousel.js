import Carousel from './Carousel'
import axios from 'axios'
import { useEffect, useState } from 'react'
import url from '../api'

export default function EventsCarousel() {
    const [items, setItems] = useState([])
    // [
    //     { _id: 1, url: "/New_York1.jpg", title: "New York", description: "City description" },
    //     { _id: 2, url: "/San_fco1.jpg", title: "San Francisco", description: "City description" },
    //     { _id: 3, url: "/Alemania1.jpg", title: "Germany", description: "City description" },
    //     { _id: 4, url: "/Suiza1.jpg", title: "Swiss", description: "City description" },
    //     { _id: 5, url: "/New_York2.jpg", title: "New York", description: "City description" },
    //     { _id: 6, url: "/San_fco2.jpg", title: "San Francisco", description: "City description" },
    //     { _id: 7, url: "/Alemania2.jpg", title: "Germany", description: "City description" },
    //     { _id: 8, url: "/Suiza2.jpg", title: "Swiss", description: "City description" },
    //     { _id: 9, url: "/Cancun1.jpg", title: "Cancun", description: "City description" },
    //     { _id: 10, url: "/Francia3.jpg", title: "Francia", description: "City description" },
    //     { _id: 11, url: "/Cancun2.jpg", title: "Cancun", description: "City description" },
    //     { _id: 12, url: "/Francia4.jpg", title: "Francia", description: "City description" },
    // ]
    useEffect(() => {
        axios.get(url + '/cities')
            .then(response => setItems(response.data))
    }, []);

    return (
        <Carousel data={items} range={4} interval={5} slides={3} />
    )
}