import { useState } from "react"

export default function LogIn() {

    const [open, setOpen] = useState(false)
    const openMenu = () => {
        if (open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className="container-login">
            <img onClick={openMenu} src="/icon-login.png" alt="" width='25px'></img>
            <div>
                {
                    open
                        ? <ul>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                        : null
                }
            </div>
        </div>
    )
}
