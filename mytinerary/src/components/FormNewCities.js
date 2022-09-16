import { useState, useRef } from "react"
import '../styles/NewCities.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from "../api";

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
            axios.post(url + '/cities', city).then(res => {
                // si responde 201 decir que la ciudad fue creada con exito
                toast.success('You have created a new city!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }).catch(error => {
                console.error(error);
                // si responde 400 decir que ciudad no fue creada
                toast.error('Incorrect data', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
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
            <ToastContainer />
        </form>
    );
}