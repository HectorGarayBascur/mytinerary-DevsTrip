import Carousel from './Carousel'

export default function EventsCarousel() {
    const items = [
        { url: "/New_York1.jpg", title: "New York" },
        { url: "/San_fco1.jpg", title: "San Francisco" },
        { url: "/Alemania2.jpg", title: "Germany" },
        { url: "/Suiza.jpg", title: "Swiss" },
        { url: "/New_York1.jpg", title: "New York" },
        { url: "/San_fco1.jpg", title: "San Francisco" },
        { url: "/Alemania2.jpg", title: "Germany" },
        { url: "/Suiza.jpg", title: "Swiss" },
        { url: "/New_York1.jpg", title: "New York" },
        { url: "/San_fco1.jpg", title: "San Francisco" },
        { url: "/Alemania2.jpg", title: "Germany" },
        { url: "/Suiza.jpg", title: "Swiss" },

    ]
    return (
        <Carousel data={items} range={4}/>
    )
}
