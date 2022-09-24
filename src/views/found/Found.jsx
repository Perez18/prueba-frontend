import React from 'react'

// img/icon
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Found = () => {
    return (
        <div className='found'>
            <h1 className='text-center'>Found in over</h1>
            <h1 className='text-center'>XXXX stores</h1>
            <p className='text-center'>find a store near you <FontAwesomeIcon icon={faArrowRight} /> </p>
        </div>
    )
}

export default Found;