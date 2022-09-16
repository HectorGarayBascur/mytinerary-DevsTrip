import { useEffect, useRef } from "react";
import * as jose from "jose";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/authSlice";
import { useGetNewUserMutation } from "../features/usersAPI";
import { ToastContainer, toast } from "react-toastify";

export default function SignUpGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonDiv = useRef(null);
  let [newUser] = useGetNewUserMutation();
  console.log(buttonDiv.current);

  async function handleCredentialResponse(response) {
    let userObject = jose.decodeJwt(response.credential);
    console.log(userObject);
    //console.log( (buttonDiv.current))
    let data = {
      name: userObject.name,
      lastName: userObject.family_name,
      photo: userObject.picture,
      mail: userObject.email,
      password: userObject.sub,
      country: "Argentina",
      role: "user",
      from: "google",
    };
    try {
      const response = await newUser(data).unwrap();
      const user = response.response.user;
      console.log('mirar aca', user)
      dispatch(setCredentials({ user }));
      localStorage.setItem("user", JSON.stringify(user));
      console.log(response.message)
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
      console.log(error)
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

    console.log(data);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "954399506520-00mttq8tfcsq17roid4r4hmcri03g2gq.apps.googleusercontent.com",
      callback: handleCredentialResponse,
      context: "signup",
    });
    google.accounts.id.renderButton(
      buttonDiv.current,
      { theme: "outline", size: "medium", text: "signup_with" } // customization attributes
    );
  }, []);
  return (
    <div>
      <div ref={buttonDiv}></div>
    </div>
  );
}
