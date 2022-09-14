import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cities from './pages/Cities';
import NewCities from "./pages/NewCities"
import Hero from "./pages/Hero"
import EditCities from "./pages/EditCities"
import City from './pages/City';
import UnderConstruction from './pages/UnderConstruction';
import FooterLayout from './layouts/FooterLayout'
import ScrollToTop from './components/ScrollToTop';
import MyTineraries from './pages/MyTineraries';
import SignUp from './pages/SignUp';
import SignInForm from './components/SignInForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <FooterLayout>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/cities' element={<Cities />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignInForm />} />
            <Route path='/cities/:id' element={<City />} />
            <Route path='/newcities' element={<NewCities />} />
            <Route path='/editcities' element={<EditCities />} />
            <Route path='*' element={<UnderConstruction />} />
            <Route path='/mytineraries' element={<MyTineraries />} />
          </Routes>
        </FooterLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;