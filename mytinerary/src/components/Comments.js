import "../styles/Comments.css"

export default function Comments({ user }) {

    return (
        <div className="container-main-comment">
            <div className="img-user">
                <img src={user.photo} alt=""></img>
            </div>
            <div className='container4-comments'>
                <div className="mail">
                    <h4>{user.mail}</h4>
                </div>
                <div className="comment">
                    <p>holaholaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
            </div>
        </div>

    )
}
