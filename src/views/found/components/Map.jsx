import React from 'react'
import { Map as MapPigeon, Marker } from "pigeon-maps"

const Map = () => {

    return (
        <div className='content-map'>
            <MapPigeon height={310} defaultCenter={[9.01253333,-79.48262856592007]} defaultZoom={15}>
                <Marker width={50} anchor={[9.012586045626406, -79.48262856592007]} />
            </MapPigeon>
        </div>
    )
}

export default Map;
