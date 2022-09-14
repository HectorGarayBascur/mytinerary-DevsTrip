import React from "react";
import { useGetLoginMutation } from "../features/usersAPI";
import SignInGoogle from "./SignInGoogle";
import { useRef } from "react";

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
