import "../styles/Comments.css"

export default function Comments({ comment }) {

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
        </div>

    )
}
