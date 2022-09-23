import { useAuth } from "../hooks/useAuth";
import { useState, useRef } from "react";
import {
  useDeleteCommentMutation,
  useModifyCommentMutation,
} from "../features/commentsAPI";
import { toast } from "react-toastify";

import "../styles/Comments.css";

export default function Comments({ comment, refetchComments }) {
  const { user: currentUser } = useAuth();
  const newInput = useRef("");
  console.log(comment);
  const [deleteComment] = useDeleteCommentMutation();
  const [newComment] = useModifyCommentMutation();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const handleUpdate = async (e) => {
    console.log("hola");
    e.preventDefault();
    const objcomment = {
      id: comment._id,
      comment: newInput.current.value,
      user: comment.user,
      itinerary: comment.itinerary,
    };
    await newComment(objcomment);
    console.log(objcomment);

    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      const response = await deleteComment(comment._id).unwrap();
      console.log("=>", response);
      if (response?.success) {
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
      } else {
        toast.error(response.data?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
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
  };

  return (
    <div className="container-main-comment">
      <div className="img-user">
        <img src={comment.user.photo} alt=""></img>
      </div>
      <div className="container4-comments">
        <div className="mail">
          <h4>
            {comment.user.lastName} {comment.user.name}
          </h4>
        </div>
        <div className="comment">
          <p>{comment.comment}</p>
        </div>
      </div>
      {currentUser?.id === comment.user._id && (
        <div>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleClick}>Modify</button>
          {open ? (
            <form>
              <input
                type="text"
                name="comment"
                defaultValue={comment.comment}
                ref={newInput}
              />
              <button onClick={handleUpdate}>Update now!</button>
            </form>
          ) : null}
        </div>
      )}
    </div>
  );
}
