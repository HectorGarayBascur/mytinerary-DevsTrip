import Cities from './pages/Cities';
import NewCities from "./pages/NewCities"
import Hero from "./pages/Hero"
import UnderConstruction from './pages/UnderConstruction';
import FooterLayout from './layouts/FooterLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FooterLayout>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/cities' element={<Cities />} />
            <Route path='/newcities' element={<NewCities />} />
            <Route path='/underconstruction' element={<UnderConstruction />} />
          </Routes>
        </FooterLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;