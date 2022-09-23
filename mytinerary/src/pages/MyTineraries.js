import Itinerary from "../components/Itinerary";
import BtnModifyItinerary from "../components/BtnModifyItinerary";
import { useGetItinerariesUserQuery } from "../features/itinerariesAPI";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link as LinkRouter } from 'react-router-dom'


export default function Mytineraries() {
  const { id } = useParams();
  const [reload, setReload] = useState(false)
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
    <div className="containerMain">
      {itineraries?.response.length > 0 ? <BtnModifyItinerary /> : null}
      {itineraries?.response.length > 0 ? itineraries?.response.map(itinerary =>
        <Itinerary itinerary={itinerary} key={itinerary._id} handleRefetch={handleRefetch} />
      ) : <div className="mssgMytinerary">
        <p>You dont have itineraries created yet</p>
        <LinkRouter to='/cities' className='btn-mod-itinerary'>Go to cities</LinkRouter>
      </div>}
    </div>
  );
}
