import { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";

import { useGetSignOutMutation, useGetUsersQuery } from "../features/usersAPI";

export default function LogIn() {
  const [logged, setLogged] = useState(false);

  const openMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const [open, setOpen] = useState(false);

  const [signOut] = useGetSignOutMutation();

  let user = JSON.parse(localStorage.getItem("userLogged"));
  const handleLogOut = async (e) => {
    try {
      let object = {
        logged: false,
        id: user[0]._id,
      };
      await signOut(object);
      localStorage.removeItem("user");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const { data: users } = useGetUsersQuery();
  let usersResponse = users?.response;
  let userLogged = usersResponse?.filter((user) => user.logged);
  if (userLogged?.length > 0) {
    localStorage.setItem("userLogged", JSON.stringify(userLogged));
  }

  return (
    <div className="container-login">
      <img onClick={openMenu} src="/icon-login.png" alt="" width="25px"></img>
      <div>
        {open ? (
          <div>
            {users?.length > 0 ? (
              <>
                <div>
                  <p>{users[0].name}</p>
                </div>
                <div>
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
