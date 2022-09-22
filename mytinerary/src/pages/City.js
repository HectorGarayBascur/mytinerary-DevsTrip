import { useParams } from 'react-router-dom';
import '../styles/City.css'
import { Link as LinkRouter } from 'react-router-dom';
import Itinerary from '../components/Itinerary';
import url from '../api';
import { useGetCityQuery } from '../features/citiesAPI';
import { useGetItinerariesQuery } from '../features/itinerariesAPI';

import NewItinerary from '../components/NewItinerary';


export default function City() {
    const { id } = useParams()
    const [reload, setReload] = useState(false)
    // const [cityData, setCityData] = useState({})
    const { data: city } = useGetCityQuery(id)
    const { data: itineraries, refetch } = useGetItinerariesQuery(id)
    const date = new Date(city?.response.fundation)


    function handleRefetch() {
        setReload(!reload)
    }
    console.log(reload);
    useEffect(() => {
        refetch()
    }, [reload])
    // useEffect(() => {
    //     axios.get(url + '/cities/' + id)
    //         .then(response => {
    //             setCityData(response.data.response)
    //         })
    // }, [])

    // const [itineraries, setitineraries] = useState([])
    // useEffect(() => {
    //     axios.get('http://localhost:4000/itineraries/6318db2de6491b05f8a4be7a')
    //         .then(response => {
    //             setitineraries(response.data.response)
    //         })
    // }, []);
    return (
        <div>
            <div className='container-card-details'>
                <div>
                    <h2>{city?.response.country}</h2>
                </div>
                <div className="container-city">
                    <div className="card">
                        <div className="card-header">
                            <img src={city?.response.photo} alt={city?.response.city} />
                        </div>
                        <div className="card-body">
                            {/* <span class="tag tag-teal">{city?.response.country}</span> */}
                            <h3>
                                {city?.response.city}
                            </h3>
                            <p>
                                {city?.response.description}
                            </p>
                            <div className="user">
                                {/* <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" /> */}
                                <div className="user-info">
                                    <h5>Population</h5>
                                    <small>{city?.response.population}</small>
                                </div>
                                <div className="user-info">
                                    <h4 className="go-cities"><LinkRouter to='/cities'>Go to cities</LinkRouter></h4>
                                </div>
                                <div className="user-info">
                                    <h5>Fundation</h5>
                                    <small>{date.getFullYear()}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewItinerary />
            </div>
            {itineraries?.response.map(itinerary =>
                <Itinerary itinerary={itinerary} key={itinerary._id} handleRefetch={handleRefetch} />
            )
            }
        </div>
    )
}

