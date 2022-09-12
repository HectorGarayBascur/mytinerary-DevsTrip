import "../styles/Comments.css"
import { useState } from 'react'

export default function Comments() {

    const [open, setOpen] = useState(false)
    const openComments = () => {
        if (open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className="container-comments">
            <h2>Comments</h2>
            <img className="icon-despleg" onClick={openComments} src="https://cdn-icons-png.flaticon.com/512/3519/3519316.png" alt="" width='25px'></img>
            <div className='container2-comments'>
                {
                    open? <div className='container3-comments'>
                            <div className="img-user">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClJXC4X-mbfNq5t_GI45AWQMayCy_2qrKIigB1d83LL6JD3pS2YbKeFcr64Ix4GhY-wI&usqp=CAU" alt=""></img>
                            </div>
                            <div className='container4-comments'>
                                <div className="mail">
                                    <h4>pedrito@gmail.com</h4>
                                </div>
                                <div className="comment">
                                    <p>epic</p>
                                </div>
                            </div>
                        </div>: null
                }
            </div>
        </div>

    )
}
