import React, { useState } from 'react';
import axios from 'axios';

const LocationCard = ({location}) => {

    //const [locations, setLocations] = useState([]);

    // setLocations = async () => {
    //     let locations = await axios.get(`http://localhost:3013/api/locations/`);
    //     console.log(locations);
    //     return locations;
    // };

    return (
        
        <div id="locationCard">
            {console.log(location)}
                <p className="text">Name: {location.name}</p>
                {/* <p className="text">Category: {location.category}</p>
                <p className="text">Street Address: {location.streetAddress}</p>
                <p className="text">City: {location.city}</p>
                <p className="text">State: {location.state}</p>
                <p className="text">Country: {location.country}</p>
                <p className="text">Phone: {location.phone}</p>
                <p className="text">Registered Owner: {location.isOwnerRegistered}</p>
                <p className="text">Owner Name: {location.ownerName}</p> */}
        </div>

     );
}
 
export default LocationCard;