import React, {useState} from 'react'

export default function InputText() {

const [city, setCity]= useState(" ")
const handleCity =(e)=> {
const city = e.target.value
setCity(city)
console.log(city)
}


  return (
    
        <form>
  <label id='city'>
    Citie Name:
    <input type="text" for="" name="name" value={city} onChange={handleCity} />
  </label>

</form>
    
  )
}
