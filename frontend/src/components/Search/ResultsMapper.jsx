import React from 'react';
import LocationCard from '../Location/LocationCard';

const ResultsMapper = ({locations}) => {

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