import Activities from "../components/Activities"
import Comments from "../components/Comments"
import { useState } from 'react'

export default function Mytineraries() {

  const [open, setOpen] = useState(false)
  const openComments = () => {
    if (open === true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }
  return (
    <div className='container-padre-itinerary'>
      <div className="data-card">
        <h2>Arch of Triumph</h2>
        <div className='data-p-d'>
          <p>Price: $3</p>
          <p>Duration:3</p>
        </div>
        <p>likes</p>
        <p>tags</p>
      </div>
      <div className='container-activities'>
        <div className='activity1'>
          <div className='img-activity'>
            <img src="https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisaje.jpg" alt=""></img>
          </div>
          <h3>title</h3>
        </div>
        <div className='activity1'>
          <div className='img-activity'>
            <img src="https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisaje.jpg" alt=""></img>
          </div>
          <h3>title</h3>
        </div>
        <div className='activity1'>
          <div className='img-activity'>
            <img src="https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisaje.jpg" alt=""></img>
          </div>
          <h3>title</h3>
        </div>
      </div>
      <div className="container-comments">
        <h2>Comments</h2>
        <img className="icon-despleg" onClick={openComments} src="https://cdn-icons-png.flaticon.com/512/3519/3519316.png" alt="" width='25px'></img>
        <div className='container2-comments'>
          {
            open
              ? <div className='container3-comments'>
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
              </div>
              : null
          }
        </div>
      </div>
    </div>
  )
}
