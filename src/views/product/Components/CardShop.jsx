import React from 'react'

// img/icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const CardShop = () => {
  return (
    <div className='card-shop'>
      <div className='image'>
        imagen
      </div>
      <div className='article'>
        <h2>Shop anything</h2>
        <h2>and everything</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <p className='more'>
          browse our collections <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </div>

    </div>
  )
}
