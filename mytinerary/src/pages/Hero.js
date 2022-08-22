/* import './App.css'; */
import Welcome from "../components/Welcome"
import Videos from "../components/Videos"
import EventsCarousel from "../components/EventsCarousel"
import FooterLayout from "../layouts/FooterLayout"

function Hero() {
  return (
    <div className="App">
      
      <FooterLayout>
      <Welcome/>
      <Videos/>
      <EventsCarousel/>
      </FooterLayout>
      

    </div>
  );
}

export default Hero;