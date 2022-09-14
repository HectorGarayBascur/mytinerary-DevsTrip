import React from "react";
import { useGetLoginMutation } from "../features/usersAPI";
import SignInGoogle from "../components/SignInGoogle";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Input({ label, name }) {
  return (
    <label className="form-label">
      {label}
      <input name={name} />
    </label>
  );
}

export default function SignInForm() {
  const buttonDiv = useRef(null);
  const form = useRef();

  const [userlog] = useGetLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginForm = new FormData(form.current);
    const loginDataUser = {
      mail: loginForm.get("mail"),
      password: loginForm.get("password"),
      from: "form",
    };
    await userlog(loginDataUser);

    if(!userlog.logged){
      toast.success('logea!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
    }else{
      toast.error('Incorrect data', {
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
    console.log(userlog);
  };

  return (
    <div>
      <form className="form-class" ref={form}>
        <Input label="Mail:" name="mail" />
        <Input label="Password:" name="password" />

        <button type="submit" onClick={handleSubmit}>
          Login!
        </button>
        <SignInGoogle />
        <ToastContainer />
      </form>
    </div>
  );
}
