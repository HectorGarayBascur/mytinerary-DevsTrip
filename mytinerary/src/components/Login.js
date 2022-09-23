import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  useGetSignOutMutation,
  useGetLoginMutation,
} from "../features/usersAPI";
import { setCredentials } from "../features/authSlice";
import { useAuth } from "../hooks/useAuth";

export default function LogIn() {
  const dispatch = useDispatch();
  const [logged, setLogged] = useState(false);
  const { user: currentUser } = useAuth();
  const navigate = useNavigate();

  const openMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const [open, setOpen] = useState(false);

  const [signOut] = useGetSignOutMutation();
  const handleLogOut = async (e) => {
    try {
      let object = {
        logged: false,
        id: currentUser.id,
      };
      let response = await signOut(object);
      dispatch(setCredentials({ user: null }));

      localStorage.removeItem("user");
      localStorage.removeItem("token");
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const [userlog] = useGetLoginMutation();
  // const currentUser = result.data?.response.user;
  // if (currentUser) {
  //   localStorage.setItem("userLogged", JSON.stringify(currentUser));
  // }

  return (
    <div className="container-login">
      {currentUser ?
        <img onClick={openMenu} src={currentUser.photo} alt="" width="25px" className="photologin"></img>
        :
        <img onClick={openMenu} src="/icon-login.png" alt="" width="25px"></img>}
      <div>
        {open ? (
          <div className="open-login">
            {currentUser ? (
              <>
                <div>
                  <p>{currentUser.name}</p>
                </div>
                <div className="btndiv">
                  <button type="button" onClick={handleLogOut}>
                    Log out
                  </button>
                </div>
              </>
            ) : (
              <ul>
                <li>
                  <LinkRouter to="/signin">Log In</LinkRouter>
                </li>
                <li>
                  <LinkRouter to="/signup">Sign Up</LinkRouter>
                </li>
              </ul>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
