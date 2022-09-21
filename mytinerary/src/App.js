import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

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
import NewItinerary from './pages/NewItinerary';
import ModifyItinerary from './pages/ModifyItinerary';
import { useAuth } from './hooks/useAuth';
import { setCredentials } from './features/authSlice';



function App() {

  // const [logged, setLogged] = useState(false)
  const dispatch = useDispatch();
  const { user: currentUser } = useAuth();
  const admin = currentUser?.role === 'admin';
  // const [admin, setAdmin] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(setCredentials({ user }));
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <FooterLayout>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/cities' element={<Cities />} />
            <Route path='/signup' element={currentUser ? <Hero /> : <SignUp showAdminForm={false} />} />
            <Route path='/signin' element={currentUser ? <Hero /> : <SignIn />} />
            <Route path='/cities/:id' element={<City />} />
            <Route path='/newcities' element={admin ? <NewCities /> : <UnderConstruction />} />
            <Route path='/editcities' element={admin ? <EditCities /> : <UnderConstruction />} />
            <Route path='/newusers' element={admin ? <SignUp showAdminForm={true} /> : <UnderConstruction />} />
            <Route path='*' element={<UnderConstruction />} />
            <Route path='/mytineraries/:id' element={currentUser ? <MyTineraries /> : <UnderConstruction />} />
            <Route path='/newitinerary' element={currentUser ? <NewItinerary /> : <UnderConstruction />} />
            <Route path='/modifyitinerary' element={currentUser ? <ModifyItinerary /> : <UnderConstruction />} />
          </Routes>
        </FooterLayout>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;