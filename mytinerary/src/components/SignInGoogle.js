import { useEffect, useRef } from "react";
import * as jose from "jose";
import { useGetLoginMutation } from "../features/usersAPI";

export default function SignUpGoogle() {
  let [user] = useGetLoginMutation();
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
    await user(data);
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
