import { useAuth } from "../hooks/useAuth";
import { useDeleteCommentMutation } from '../features/commentsAPI';
import { toast } from "react-toastify";

import "../styles/Comments.css"

export default function Comments({ comment, refetchComments }) {
    const { user: currentUser } = useAuth();
    console.log(comment)
    const [deleteComment] = useDeleteCommentMutation();

    const handleDelete = async () => {
        try {
            const response = await deleteComment(comment._id).unwrap();
            console.log('=>', response);
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
                })
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
            })
        }
    }

    return (
        <div className="container-main-comment">
            <div className="img-user">
                <img src={comment.user.photo} alt=""></img>
            </div>
            <div className='container4-comments'>
                <div className="mail">
                    <h4>{comment.user.lastName} {comment.user.name}</h4>
                </div>
                <div className="comment">
                    <p>{comment.comment}</p>
                </div>
            </div>
            {currentUser?.id === comment.user._id && (
                <div>
                    <button onClick={handleDelete}>Delete</button>
                    <button>Modify</button>
                </div>
            )}
        </div>

    )
}
