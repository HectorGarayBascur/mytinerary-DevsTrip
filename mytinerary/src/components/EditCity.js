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

function Select({ name, items, onChange }) {
    return (
        <select name={name} onChange={onChange} defaultValue="empty">
            <option disabled value="empty">Select the City to Edit</option>
            {items.map((item) => (<option key={item._id} value={item._id}>{item.city}</option>))}
        </select>
    )
}

export default function EditCity() {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(url + '/cities')
            .then(response => {
                console.log(response)
                setItems(response.data)
            })
    }, []);

    const formRef = useRef();

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

        const id = formData.get('cityid');
        if (id) {
            axios.patch('http://localhost:4000/cities/' + id, city).then((res) => {
                alert(res.data.message);
            }).catch(error => {
                console.error(error);
                alert(error.response.data.message);
            })
        }
    };

    const handleSelect = (event) => {
        const selectedId = event.target.value;
        console.log(selectedId)
        items.forEach(item => {
            if (item._id == selectedId) {
                const form = formRef.current;
                Object.keys(item).forEach((key) => {
                    const input = form.elements[key];
                    if (input) {
                        input.value = item[key];
                    }
                });
            }
        });
    }

    return (
        <form ref={formRef} action="#" className="inputs-class">
            <Select name="cityid" items={items} onChange={handleSelect} />
            <Input label="New City:" name="city" />
            <Input label="New Country:" name="country" />
            <Input label="New Photo:" name="photo" />
            <Input label="New description:" name="description" />
            <Input label="Update Population:" name="population" />
            <Input label="Edit:" name="fundation" />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}