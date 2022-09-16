import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useGetLoginMutation, useGetLoginQuery } from "../features/usersAPI";
import SignInGoogle from "./SignInGoogle";
import { useAuth } from "../hooks/useAuth";
import { setCredentials } from "../features/authSlice";
import "react-toastify/dist/ReactToastify.css";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userlog] = useGetLoginMutation();
  const auth = useAuth();
  // const currentUser = useGetLoginQuery();
  // console.log(currentUser)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginForm = new FormData(form.current);

    const loginDataUser = {
      mail: loginForm.get("mail"),
      password: loginForm.get("password"),
      from: "form",
    };
    try {
      const response = await userlog(loginDataUser).unwrap();
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
      navigate("/");
    } catch (error) {
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
      </form>
    </div>
  );
}
