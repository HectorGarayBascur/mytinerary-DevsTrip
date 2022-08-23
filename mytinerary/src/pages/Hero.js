/* import './App.css'; */
import Videos from "../components/Videos"
import EventsCarousel from "../components/EventsCarousel"

function Hero() {
  return (
    <div className="App">
      <Videos/>
      <EventsCarousel/>
    </div>
  );
}

export default Hero;