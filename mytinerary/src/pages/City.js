import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/City.css'
import { Link as LinkRouter } from 'react-router-dom';
import axios from 'axios';

export default function City() {
    const { id } = useParams()
    const [cityData, setCityData] = useState({})
    const date = new Date(cityData.fundation)

    useEffect(() => {
        axios.get('http://localhost:4000/cities/' + id)
            .then(response => {
                setCityData(response.data.response)
            })
    }, [])

    return (
        <div className='container-card-details'>
            <div>
                <h2>{cityData.country}</h2>
            </div>
            <div className="container-city">
                <div className="card">
                    <div className="card-header">
                        <img src={cityData.photo} alt={cityData.city} />
                    </div>
                    <div className="card-body">
                        {/* <span class="tag tag-teal">{cityData.country}</span> */}
                        <h3>
                            {cityData.city}
                        </h3>
                        <p>
                            {cityData.description}
                        </p>
                        <div className="user">
                            {/* <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" /> */}
                            <div className="user-info">
                                <h5>Population</h5>
                                <small>{cityData.population}</small>
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
        </div>
    )
}

