import React from 'react'
import { Image } from 'react-bootstrap'

import { Map as MapGL } from 'react-map-gl';

// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
// import map from 'src/assets/images/mapmax.png'
// const MapDefault = () => {
//     return (
//         <GoogleMap
//             defaultZoom={10}
//             defaultCenter={{ lat: 8.983333,lng: -79.516670 }}
//         />
//     )
// }

// const Wrapped = withScriptjs(withGoogleMap(MapDefault));


const Map = () => {

    return (
        <div style={{ width: '100vh', height: '70vh' }}>
            <MapGL
                initialViewState={{
                    longitude: -100,
                    latitude: 40,
                    zoom: 3.5
                }}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken='1'
            />;
        </div>
    )
}

export default Map;
