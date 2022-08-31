import React from 'react'
import axios from 'axios'
import CityCard from '../components/CityCard'
import InputText from '../components/InputText'
import { useEffect, useState } from 'react'


export default function Cities() {
  const [items, setItems] = useState([])
  // { _id: 1, url: "/New_York1.jpg", title: "New York", description: "City description", country: "USA", population: "10.000", fundation: "2022" },
  //   { _id: 2, url: "/San_fco1.jpg", title: "San Francisco", description: "City description", country: "USA", population: "10.000", fundation: "2022" },
  //   { _id: 3, url: "/Alemania1.jpg", title: "Germany", description: "City description", country: "Germany", population: "10.000", fundation: "2022" },
  //   { _id: 4, url: "/Suiza1.jpg", title: "Swiss", description: "City description", country: "Swiss", population: "10.000", fundation: "2022" },
  //   { _id: 5, url: "/New_York2.jpg", title: "New York", description: "City description", country: "USA", population: "10.000", fundation: "2022" },
  //   { _id: 6, url: "/San_fco2.jpg", title: "San Francisco", description: "City description", country: "USA", population: "10.000", fundation: "2022" },
  //   { _id: 7, url: "/Alemania2.jpg", title: "Germany", description: "City description", country: "Germany", population: "10.000", fundation: "2022" },
  //   { _id: 8, url: "/Suiza2.jpg", title: "Swiss", description: "City description", country: "Swiss", population: "10.000", fundation: "2022" },
  //   { _id: 9, url: "/Cancun1.jpg", title: "Cancun", description: "City description", country: "Mexico", population: "10.000", fundation: "2022" },
  //   { _id: 10, url: "/Francia3.jpg", title: "Francia", description: "City description", country: "France", population: "10.000", fundation: "2022" },
  //   { _id: 11, url: "/Cancun2.jpg", title: "Cancun", description: "City description", country: "Mexico", population: "10.000", fundation: "2022" },
  //   { _id: 12, url: "/Francia4.jpg", title: "Francia", description: "City description", country: "France", population: "10.000", fundation: "2022" },
  // ]

  useEffect(() => {
    axios.get('http://localhost:4000/cities')
      .then(response => setItems(response.data))
  }, []);


  return (
    <div>
      <div>
        <InputText />
      </div>
      <div className='container-cities'>
        {items.map((item) => (
          <CityCard key={item._id} city={item.city} photo={item.photo} country={item.country} />
        ))}
      </div>
    </div>
  )
}
