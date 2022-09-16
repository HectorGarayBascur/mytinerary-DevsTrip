import { useEffect, useRef } from "react";
import * as jose from "jose";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetLoginMutation } from "../features/usersAPI";
import { setCredentials } from "../features/authSlice";

export default function SignUpGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [userlog] = useGetLoginMutation();
  const buttonDiv = useRef(null);
  //  console.log(buttonDiv.current);

  async function handleCredentialResponse(response) {
    let userObject = jose.decodeJwt(response.credential);
    console.log(userObject);
    //console.log( (buttonDiv.current))

    let data = {
      mail: userObject.email,
      password: userObject.sub,
      from: "google",
    };

    console.log(data);
    try {
      const response = await userlog(data).unwrap();
      const user = response.response.user;
      console.log('mirar aca', user)
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
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "954399506520-00mttq8tfcsq17roid4r4hmcri03g2gq.apps.googleusercontent.com",
      callback: handleCredentialResponse,
      context: "signin",
    });
    google.accounts.id.renderButton(
      buttonDiv.current,
      { theme: "outline", size: "medium", text: "signin_with" } // customization attributes
    );
  }, []);
  return (
    <div>
      <div ref={buttonDiv}></div>
    </div>
  );
}
