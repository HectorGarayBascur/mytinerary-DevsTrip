import React from 'react'
import axios from 'axios'
import CityCard from '../components/CityCard'
import '../styles/Cities.css'
import { useEffect, useState, useRef } from 'react'


export default function Cities() {
  const [items, setItems] = useState([])
  const [value, setValue] = useState("")
  const inputSearch = useRef()


  useEffect(() => {
    axios.get('http://localhost:4000/cities?city=' + value)
      .then(response => { setItems(response.data) })
      .catch(error => console.log(error))
  }, [value]);



  const valueCity = () => {
    setValue(inputSearch.current.value)
  }

  return (
    <div>
      <div className='searchCities'>
        <form className='input-cities' method='get'>
          <input className="inputText" placeholder={'Search City'} ref={inputSearch} onChange={valueCity} />
        </form>
      </div>
      <div className='container-cities'>
        {items.map((item) => (
          <CityCard key={item._id}
            city={item.city}
            photo={item.photo}
            country={item.country} />
        ))}
      </div>
    </div>
  )
}
