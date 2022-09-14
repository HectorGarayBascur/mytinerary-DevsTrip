import { useState, useEffect } from 'react'
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
import SignIn from './pages/SignIn';



function App() {

  const [logged,setLogged] = useState(false)
  const [admin,setAdmin] = useState(false)

  useEffect(() => {
    JSON.parse(localStorage.getItem('user')) && setLogged(true)
    JSON.parse(localStorage.getItem('user'))?.role==='admin' && setAdmin(true)
}, [])


  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <FooterLayout>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/cities' element={<Cities />} />
            <Route path='/signup' element={logged ? <Hero /> : <SignUp />} />
            <Route path='/signin' element={logged ? <Hero /> : <SignIn />} />
            <Route path='/cities/:id' element={<City />} />
            <Route path='/newcities' element={admin ? <NewCities /> : <UnderConstruction />} />
            <Route path='/editcities' element={admin ? <EditCities /> : <UnderConstruction />} />
            <Route path='*' element={<UnderConstruction />} />
            <Route path='/mytineraries' element={logged ? <UnderConstruction /> : <MyTineraries />} />
          </Routes>
        </FooterLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;