import React from 'react';
import LocationCard from '../Location/LocationCard';

const ResultsMapper = (props) => {

    return ( 
        <div>
            {props.locations && props.locations.map((location) => 
                <li key={location._id}>
                    <LocationCard location={location} />
                </li>
            )};
        </div>
     );
}

export default ResultsMapper; 