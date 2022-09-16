import SignUpGoogle from "../components/SignUpGoogle";
import { useGetNewUserMutation } from "../features/usersAPI";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Input({ label, name }) {
  return (
    <label className="form-label">
      {label}
      <input name={name} />
    </label>
  );
}

export default function SignUpForm({ showRole }) {
  const form = useRef();
  const [newUser] = useGetNewUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const user = {
      name: formData.get("name"),
      lastName: formData.get("lastname"),
      mail: formData.get("mail"),
      country: formData.get("country"),
      photo: formData.get("photo"),
      password: formData.get("password"),
      from: "form",
      role: formData.get("role"),
    };
    await newUser(user);

    console.log(user);

    form.current.reset();
  };

  return (
    <div>
      <form ref={form} className="form-class">
        <Input label="Name:" name="name" />
        <Input label="Lastname:" name="lastname" />
        <Input label="Mail:" name="mail" />
        <Input label="Country:" name="country" />
        <Input label="Photo URL:" name="photo" />
        <Input label="Password:" name="password" />
        <select name='role'>
          <option value="user">user</option>
          {showRole ? <option value="admin">admin</option> : null}
        </select>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <ToastContainer />

        <SignUpGoogle />
      </form>
    </div>
  );
}
