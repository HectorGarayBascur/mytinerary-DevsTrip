import React from 'react'
import { useGetLoginMutation } from "../features/usersAPI"
import { useRef } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Input({ label, name }) {
  return (
    <label className="form-label">
      {label}
      <input name={name} />
    </label>
  )
}
export default function SignIn() {
  const form = useRef()

  const [userlog] = useGetLoginMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginForm = new FormData(form.current)
    const loginDataUser = {

      mail: loginForm.get("mail"),
      password: loginForm.get("password"),
      from: "form",
    }
    await userlog(loginDataUser)
    form.current.reset()
    console.log(userlog)

     toast.success('You have successfully registered!!', {
       position: "top-center",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: false,
       draggable: true,
       progress: undefined,
  });

  }

  return (
    <div>

      <form className="form-class" ref={form} >
        <Input label="Mail:" name="mail" />
        <Input label="Password:" name="password" />
        <button type="submit" onClick={handleSubmit} >Login!</button>
        <ToastContainer />
      </form>
    </div>
  )
}

