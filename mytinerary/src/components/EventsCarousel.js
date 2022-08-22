import Carousel from './Carousel'

export default function EventsCarousel() {
    const items = [
        { url: "/New_York1.jpg", title: "New York" },
        { url: "/San_fco1.jpg", title: "San Francisco" },
        { url: "/Alemania1.jpg", title: "Germany" },
        { url: "/Suiza1.jpg", title: "Swiss" },
        { url: "/New_York2.jpg", title: "New York" },
        { url: "/San_fco2.jpg", title: "San Francisco" },
        { url: "/Alemania2.jpg", title: "Germany" },
        { url: "/Suiza2.jpg", title: "Swiss" },
        { url: "/Cancun1.jpg", title: "Cancun" },
        { url: "/Francia3.jpg", title: "Francia" },
        { url: "/Cancun2.jpg", title: "Cancun" },
        { url: "/Francia4.jpg", title: "Francia" },

    ]
    return (
        <Carousel data={items} range={4} interval={5}/>
    )
}
