import { useEffect, useRef } from "react";
import * as jose from "jose";
import { useGetNewUserMutation } from "../features/usersAPI";

export default function SignUpGoogle() {
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
    await newUser(data);
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
