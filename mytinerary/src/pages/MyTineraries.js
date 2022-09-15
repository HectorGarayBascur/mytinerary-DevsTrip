import Itinerary from "../components/Itinerary";
import { useGetItinerariesUserQuery } from '../features/itinerariesAPI';
import { useGetUsers2Query } from '../features/usersAPI';
import { useParams } from 'react-router-dom';


export default function Mytineraries() {

  const { id } = useParams()
  // const id = "632376967a78bf08031af2df"
  // console.log(id)
  const { data: user } = useGetUsers2Query(id)
  const { data: itineraries } = useGetItinerariesUserQuery(id)
  // console.log(user)

  return (
    <div>
      {/* <div>
        <p>Itinerario de {user?.response.name}</p>
      </div> */}
      {itineraries?.response.map(itinerary =>
                <Itinerary itinerary={itinerary} key={itinerary._id} />
            )
            }
    </div>
  )
}
