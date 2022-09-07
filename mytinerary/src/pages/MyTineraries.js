import Activities from "../components/Activities"
import Comments from "../components/Comments"

export default function Mytineraries() {
  return (
    <div className='container-padre-itinerary'>
            <div className="data-card">
                <h2>Name</h2>
                <div className='data-p-d'>
                    <p>Price: $3</p>
                    <p>Duration:3</p>
                </div>
                <p>likes</p>
                <p>tags</p>
            </div>
            <Activities />
            <Comments />
    </div>
  )
}
