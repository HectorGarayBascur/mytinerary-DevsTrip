import { useEffect, useRef } from "react";
import * as jose from "jose";

export default function SignUpGoogle() {
  const buttonDiv = useRef(null);
  console.log(buttonDiv.current);

  async function handleCredentialResponse(response) {
    let userObject = jose.decodeJwt(response.credential);
    console.log(userObject);
    //console.log( (buttonDiv.current))

    let data = {
      name: userObject.name,
      photo: userObject.photo,
      mail: userObject.mail,
      password: userObject.password,
      role: "user",
      from: "google",
    };

    console.log(data);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "954399506520-00mttq8tfcsq17roid4r4hmcri03g2gq.apps.googleusercontent.com",
      callback: handleCredentialResponse,
      context: "signUp",
    });
    google.accounts.id.renderButton(
      buttonDiv.current,
      { theme: "outline", size: "medium", text: "signup_width" } // customization attributes
    );
  }, []);
  return (
    <div>
      <div ref={buttonDiv}></div>
    </div>
  );
}
