import React, { useState } from 'react';
import LocationCard from '../Location/LocationCard';

const ResultsMapper = ({locations}) => {

//const [locations, setLocations] = useState([]);

    return ( 
        <div>
            {locations && locations.map((location) => 
                <li key={location._id}>
                    <LocationCard location={location} />
                </li>
            )};
        </div>
     );
}
 
export default ResultsMapper;