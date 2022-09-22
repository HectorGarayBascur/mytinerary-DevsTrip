import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../styles/EditCities.css";
import url from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Input({ label, name }) {
  return (
    <label>
      {label}
      <input name={name} />
    </label>
  );
}

function Select({ name, items, onChange }) {
  return (
    <select name={name} onChange={onChange} defaultValue="empty">
      <option disabled value="empty">
        Select the Itinerary to Edit
      </option>
      {items?.map((item) => (
        <option key={item._id} value={item._id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default function EditItinerary() {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(url + "/itineraries?user=" + id).then((response) => {
      setItems(response.data);
    });
  }, []);

  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const itinerary = {
      name: formData.get("name"),
      price: formData.get("price"),
      tags: formData.get("tags"),
      duration: formData.get("duration"),
    };
    console.log(itinerary);

    const id = formData.get("itineraryid");
    if (id) {
      axios
        .patch(url + "/itineraries/" + id, itinerary)
        .then((res) => {
          toast.success("You have edited a itinerary!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("Incorrect data", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  const handleSelect = (event) => {
    const selectedId = event.target.value;
    items.response.forEach((item) => {
      if (item._id == selectedId) {
        const form = formRef.current;
        Object.keys(item).forEach((key) => {
          const input = form.elements[key];
          if (input) {
            input.value = item[key]._id || item[key];
            console.log(input.value);
          }
        });
      }
    });
  };

  return (
    <div className="form-newcity">
      <form ref={formRef} action="#" className="inputs-class">
        <Select
          name="itineraryid"
          items={items.response}
          onChange={handleSelect}
        />
        <Input label="Name:" name="name" />
        <Input label="Price:" name="price" />
        <Input label="Duration:" name="duration" />
        <Input label="Tags:" name="tags" />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
