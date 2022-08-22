import './App.css';
import Welcome from './components/Welcome.js';
import Footer from "./components/Footer.js";
import EventsCarousel from './components/EventsCarousel';
import Videos from './components/Videos';
import FooterUnderConstructionLayout from "./layouts/FooterUnderConstructionLayout"

function App() {
  return (
    <div className="App">
        <Welcome />
        <Videos />
        <EventsCarousel />
        <Footer/>
        <FooterUnderConstructionLayout/>
    </div>
  );
}

export default App;