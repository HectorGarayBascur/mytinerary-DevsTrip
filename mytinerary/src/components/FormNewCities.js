import { useState, useRef } from "react"
import '../styles/NewCities.css'

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

    console.log(cities);

    return (
        <form ref={formRef} action="#" className="inputs-class">
            <Input label="City:" name="city" />
            <Input label="Country:" name="country" />
            <Input label="Photo:" name="photo" />
            <Input label="Population:" name="population" />
            <Input label="Fundation:" name="fundation" />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}