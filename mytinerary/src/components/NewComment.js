import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { setCredentials } from "../features/authSlice";
import { useGetNewCommentMutation } from "../features/commentsAPI"

function Input({ label, name }) {
    return (
        <label className="form-label">
            {label}
            <input name={name} />
        </label>
    );
}

export default function NewComment() {
    const form = useRef();
    const dispatch = useDispatch();
    const [userComment] = useGetNewCommentMutation();
    const { user: currentUser } = useAuth();

    const token = (localStorage.getItem('token'));

    const handleSubmit = async (e) => {
        e.preventDefault();

        const commentForm = new FormData(form.current);
        console.log(commentForm)

        const dataComment = {
            comment: commentForm.get("comment"),
            itinerary: commentForm.get("itinerary"),
            user: currentUser.id
        };
        try {
            const response = await userComment(dataComment).unwrap();
            dispatch(setCredentials({ token }));
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

    if(token){
        return (
            <div>
                <form ref={form}>
                    <Input label="Comment:" name="comment" />
                    <Input label="itinerary:" name="itinerary" />
                    <button type="submit" onClick={handleSubmit}>send</button>
                </form>
            </div>
        );
    }
}