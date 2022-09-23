import { useRef, useState } from "react"
import '../styles/NewCities.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from "../api";
import "../styles/SignUp.css"
import { useGetCityQuery } from '../features/citiesAPI'
import { useGetNewItineraryMutation } from '../features/itinerariesAPI'

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

export default function NewItinerary({ handleRefetch }) {

    const { id } = useParams()
    const { data: cityId } = useGetCityQuery(id);
    const [newItinerary] = useGetNewItineraryMutation()
    const user = JSON.parse(localStorage.getItem('user'))

    const formRef = useRef();

    const handleSubmit = async (event) => {
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
        try {
            const response = await newItinerary(itinerary).unwrap();
            if (response.success) {
                toast.success(response.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                })
                handleRefetch();
            } else {
                toast.error(response.data?.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                })
            }
            ;
        } catch (error) {
            console.error(error);
            toast.error(error.data?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
        formRef.current.reset();
        // form.current.reset();
        // axios.post(url + '/itineraries', itinerary)
        //     .then(res => {
        //         toast.success('You have created a new itinerary!!', {
        //             position: "top-center",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: false,
        //             draggable: true,
        //             progress: undefined,
        //         });
        //     }).catch(error => {
        //         console.error(error);
        //         toast.error('Incorrect data', {
        //             position: "top-center",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: false,
        //             draggable: true,
        //             progress: undefined,
        //         });
        //     })
        // formRef.current.reset();

    }

    const [open, setOpen] = useState(false);
    const openComments = () => {
        if (open === true) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    if (user) {
        return (
            <div>
                <div className="container-title-new-itinerary">
                    <h3>Create new Itinerary</h3>
                    <h4>⬇</h4>
                    <img className="icon-despleg" onClick={openComments} src="https://cdn-icons-png.flaticon.com/128/1287/1287078.png" alt="" width="25px"></img>
                </div>
                <div className='form-newitinerary'>
                    {open ? (
                        <form ref={formRef} action="#" className="inputs-class">
                            <Input label="Name:" name="name" />
                            <Input label="Price:" name="price" />
                            <Input label="Duration:" name="duration" />
                            <Input label="Tags:" name="tags" />
                            <button type="submit" onClick={handleSubmit}> Submit </button>
                        </form>
                    ) : null}
                </div>
            </div>
        );
    }
}