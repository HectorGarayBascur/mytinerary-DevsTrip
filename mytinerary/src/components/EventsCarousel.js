import Carousel from './Carousel'

export default function EventsCarousel() {
    const items = [
        {_id:1, url: "/New_York1.jpg", title: "New York" },
        {_id:2, url: "/San_fco1.jpg", title: "San Francisco" },
        {_id:3, url: "/Alemania1.jpg", title: "Germany" },
        {_id:4, url: "/Suiza1.jpg", title: "Swiss" },
        {_id:5, url: "/New_York2.jpg", title: "New York" },
        {_id:6, url: "/San_fco2.jpg", title: "San Francisco" },
        {_id:7, url: "/Alemania2.jpg", title: "Germany" },
        {_id:8, url: "/Suiza2.jpg", title: "Swiss" },
        {_id:9, url: "/Cancun1.jpg", title: "Cancun" },
        {_id:10, url: "/Francia3.jpg", title: "Francia" },
        {_id:11, url: "/Cancun2.jpg", title: "Cancun" },
        {_id:12, url: "/Francia4.jpg", title: "Francia" },

    ]
    return (
        <Carousel data={items} range={4} interval={5}/>
    )
}
