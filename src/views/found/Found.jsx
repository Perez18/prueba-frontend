import React from 'react'
import Map  from './components/Map';

// img/icon
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Found = () => {
    return (
        <div className='found'>
            <h1 className='text-center fw-bold'>Found in over</h1>
            <h1 className='text-center fw-bold'>XXXX stores</h1>
            <p className='text-center more'>find a store near you <FontAwesomeIcon icon={faArrowRight} /> </p>
            <Map />
        </div>
    )
}

export default Found;