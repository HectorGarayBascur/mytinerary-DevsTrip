import Itinerary from "../components/Itinerary";
import BtnModifyItinerary from "../components/BtnModifyItinerary";
import { useGetItinerariesUserQuery } from '../features/itinerariesAPI';
import { useParams } from 'react-router-dom';

export default function Mytineraries() {

  const { id } = useParams()
  // const id = "632376967a78bf08031af2df"
  const { data: itineraries } = useGetItinerariesUserQuery(id)

  return (
    <div>
      <BtnModifyItinerary />
      {itineraries?.response.map(itinerary =>
        <Itinerary itinerary={itinerary} key={itinerary._id} />
      )
      }
    </div>
  )
}
