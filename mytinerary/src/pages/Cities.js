import React from 'react'
import axios from 'axios'
import CityCard from '../components/CityCard'
import '../styles/Cities.css'
import { useEffect, useState, useRef } from 'react'
import url from '../api'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFromServer } from '../features/citySlice'
import { useGetAllCitiesQuery } from '../features/citiesAPI'


export default function Cities() {
  const {
    data: items,
    error,
    isLoading,
    isSuccess,
    isFailed,
  } = useGetAllCitiesQuery();

  // const [items, setItems] = useState([])
  // let items = useSelector(state => state.cities.cities)
  // let dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchFromServer())
  // }, [])
  // console.log('Cities', items)
  const [value, setValue] = useState("")
  // const inputSearch = useRef()


  useEffect(() => {
    axios.get(url + '/cities?city=' + value)
      .then(response => { setItems(response.data) })
      .catch(error => console.log(error))
  }, [value]);

  const valueCity = (event) => {
    setValue(event.target.value)
  }

  // const filteredCities = (items || []).filter((item) => {
  //   return item.city.toLowerCase().includes(value.toLowerCase())
  // }) 

  const filteredCities = []
  items?.forEach(item => {
    //la city tiene que contener el input

    if (item.city.toLowerCase().includes(value.toLowerCase())) {
      filteredCities.push(item)
    }

  });
  console.log(filteredCities)

  // ref={inputSearch}


  return (
    <div>
      <div className='searchCities'>
        <form className='input-cities' method='get'>
          <input className="inputText" placeholder={'Search City'} onChange={valueCity} />
        </form>
      </div>
      <div className='container-cities'>
        {filteredCities.map((item) => (
          <CityCard key={item._id}
            city={item.city}
            photo={item.photo}
            country={item.country}
            linkTo={item._id} />
        ))}
      </div>
    </div>
  )
}