import { useState, useRef } from "react"
import '../styles/NewCities.css'
import axios from 'axios'

function Input({ label, name }) {
    return (
        <label className="form-label">
            {label}
            <input name={name} />
        </label>
    )
}

export default function FormNewCities() {
    const formRef = useRef();
    // const [cities, updateCities] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const city = {
            city: formData.get('city'),
            country: formData.get('country'),
            photo: formData.get('photo'),
            description: formData.get('description'),
            population: formData.get('population'),
            fundation: formData.get('fundation'),
        };

        // const newCities = [...cities];

        if (city.population >= 1000 && city.population <= 100000000) {
            // enviar city al backend post http://localhost:4000/cities
            axios.post('http://localhost:4000/cities', city).then(res => {
                // si responde 201 decir que la ciudad fue creada con exito
                alert(res.data.message)
                console.log(res)
            }).catch(error => {
                // si responde 400 decir que ciudad no fue creada
                alert(error.response.data.message)
                console.error(error)
            })
            // newCities.push(city);
            // updateCities(newCities);
        }
    };

    return (
        <form ref={formRef} action="#" className="inputs-class">
            <Input label="City:" name="city" />
            <Input label="Country:" name="country" />
            <Input label="Photo:" name="photo" />
            <Input label="Description:" name="description" />
            <Input label="Population:" name="population" />
            <Input label="Fundation:" name="fundation" />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}