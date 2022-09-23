import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { setCredentials } from "../features/authSlice";
import { useGetNewCommentMutation } from "../features/commentsAPI";
import '../styles/Comments.css'


function Input({ label, name }) {
  return (
    <label className="form-label">
      {label}
      <input name={name} />
    </label>
  );
}

export default function NewComment({ id, refetchComments }) {
  let itineraryId = id;
  const form = useRef();
  const dispatch = useDispatch();
  const [userComment] = useGetNewCommentMutation();
  const { user: currentUser } = useAuth();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentForm = new FormData(form.current);

    const dataComment = {
      comment: commentForm.get("comment"),
      itinerary: itineraryId,
      user: currentUser.id,
    };
    console.log(commentForm);

    try {
      const response = await userComment(dataComment).unwrap();
      // dispatch(setCredentials({ currentUser, token })); // solo necesario para cuando uno hace login o quiere actualizar el token/currentUser
      // localStorage.setItem("token", token);
      // localStorage.setItem("user", JSON.stringify(currentUser));
      refetchComments();
      toast.success(response.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
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
  };

  // Si esta logeado, muestro esto
  if (token) {
    return (
      <div >
        <form ref={form} className="newcomment">
          <Input label="New comment:" name="comment" />
          <button type="submit" onClick={handleSubmit}>
            send
          </button>
        </form>
      </div>
    );
  }
}
