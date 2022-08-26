import React, {useState} from 'react'
import Cities from '../styles/Cities.css'

export default function InputText() {

const [city, setCity]= useState(" ")
const handleCity =(e)=> {
const city = e.target.value
setCity(city)
console.log(city)
}


  return (
    
        <form className='formText'>
  <label id='city' className='labelForm'>
    Citie Name:
    <input type="text" for="" name="name" value={city} onChange={handleCity} className="inputText" />
  </label>

</form>
    
  )
}
