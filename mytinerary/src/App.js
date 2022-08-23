import Cities from './pages/Cities';
import NewCities from "./pages/NewCities"
import Hero from "./pages/Hero"
import UnderConstruction from './pages/UnderContrstruction';
import { BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Hero/>} />
          <Route path= '/cities' element={<Cities/>} />
          <Route path= '/newcities' element={<NewCities/>} />
          <Route path= '/underconstruction' element={<UnderConstruction/>} />     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;