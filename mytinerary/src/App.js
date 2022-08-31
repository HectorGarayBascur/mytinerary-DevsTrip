import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cities from './pages/Cities';
import NewCities from "./pages/NewCities"
import Hero from "./pages/Hero"
import EditCities from "./pages/EditCities"
import UnderConstruction from './pages/UnderConstruction';
import FooterLayout from './layouts/FooterLayout'
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <FooterLayout>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/cities' element={<Cities />} />
            <Route path='/newcities' element={<NewCities />} />
            <Route path='/editcities'element={<EditCities/>}/>
            <Route path='*' element={<UnderConstruction />} />
          </Routes>
        </FooterLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;