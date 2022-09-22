import Itinerary from "../components/Itinerary";
import BtnModifyItinerary from "../components/BtnModifyItinerary";
import { useGetItinerariesUserQuery } from '../features/itinerariesAPI';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Mytineraries() {
  const [reload, setReload] = useState(false)
  const { id } = useParams()
  // const id = "632376967a78bf08031af2df"
  const { data: itineraries, refetch } = useGetItinerariesUserQuery(id)
  function handleRefetch() {
    setReload(!reload)
  }
  console.log(reload);
  useEffect(() => {
    refetch()
  }, [reload])



  return (
    <div>
      <BtnModifyItinerary />
      {itineraries?.response.map(itinerary =>
        <Itinerary itinerary={itinerary} key={itinerary._id} handleRefetch={handleRefetch} />
      )
      }
    </div>
  )
}
