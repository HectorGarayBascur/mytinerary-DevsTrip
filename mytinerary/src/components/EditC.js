import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import '../styles/EditCities.css'
import url from '../api'

function Input({ label, name }) {
    return (
        <label>
            {label}
            <input name={name} />
        </label>
    )
}

/* function Select ({name}) {
    return (

        <select>
        <option disabled selected value>Select the City to Edit</option>

        {{name}.map((element)=>(<option value={element.city}>{element.city}</option>))}
        </select>
     
    )
} */

export default function FormNewCities() {
    const [cit, setItems] = useState([])
    useEffect(() => {
        axios.get(url + '/cities')
            .then(response => {
                console.log(response)
                setItems(response.data)
            })
    }, []);

    let cityArray = cit.map(element => element)
    console.log(cityArray)
    const formRef = useRef();
    const [cities, updateCities] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const city = {
            city: formData.get('city'),
            country: formData.get('country'),
            photo: formData.get('photo'),
            population: formData.get('population'),
            fundation: formData.get('fundation'),
        };

        const newCities = [...cities];
        newCities.push(city);
        updateCities(newCities);
    };

    console.log(cities)
    return (
        <form ref={formRef} action="#" className="inputs-class">
            <Input label="New City:" name="city" />
            <Input label="New Country:" name="country" />
            <Input label="New Photo:" name="photo" />
            <Input label="Update Population:" name="population" />
            <Input label="Edit:" name="fundation" />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}