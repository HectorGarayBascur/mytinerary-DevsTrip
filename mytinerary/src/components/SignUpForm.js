import SignUpGoogle from "../components/SignUpGoogle";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/authSlice";
import { useGetNewUserMutation } from "../features/usersAPI";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Input({ label, name, type }) {
  return (
    <label className="form-label">
      {label}
      <input name={name} type={type} />
    </label>
  );
}

export default function SignUpForm({ showRole }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useRef();
  const [newUser] = useGetNewUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const formUser = {
      name: formData.get("name"),
      lastName: formData.get("lastname"),
      mail: formData.get("mail"),
      country: formData.get("country"),
      photo: formData.get("photo"),
      password: formData.get("password"),
      from: "form",
      role: formData.get("role"),
    };
    try {
      const response = await newUser(formUser).unwrap();
      const user = response.response.user;
      dispatch(setCredentials({ user }));
      localStorage.setItem("user", JSON.stringify(user));
      toast.success(response.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      navigate("/signin");
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
        <Input label="Password:" name="password" type="password" />
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
