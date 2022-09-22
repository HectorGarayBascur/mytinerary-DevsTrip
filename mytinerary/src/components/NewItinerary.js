import { useRef } from "react"
import '../styles/NewCities.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from "../api";
import "../styles/SignUp.css"
import { useGetCityQuery } from '../features/citiesAPI'

import { useParams } from 'react-router-dom';
// const city = JSON.parse(localStorage.getItem('city'))

function Input({ label, name }) {
    return (
        <label className="form-label">
            {label}
            <input name={name} />
        </label>
    );
}

export default function NewItinerary() {

    const { id } = useParams()
    const { data: cityId } = useGetCityQuery(id);
    const user = JSON.parse(localStorage.getItem('user'))

    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const itinerary = {
            name: formData.get('name'),
            price: formData.get('price'),
            duration: formData.get('duration'),
            tags: formData.get('tags'),
            city: id,
            user: user.id,
        };

        axios.post(url + '/itineraries', itinerary)
        .then(res => {
            toast.success('You have created a new itinerary!!', {
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
            toast.error('Incorrect data', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        })
        formRef.current.reset();
    }

    if(user){
        return (
            <div className='form-newcity'>
                <form ref={formRef} action="#" className="inputs-class">
                    <Input label="Name:" name="name" />
                    <Input label="Price:" name="price" />
                    <Input label="Duration:" name="duration" />
                    <Input label="Tags:" name="tags" />
                    <button type="submit" onClick={handleSubmit}> Submit </button>
                </form>
            </div>
        );
    }
}