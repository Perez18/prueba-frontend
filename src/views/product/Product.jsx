import React from 'react'

// Boostrap
import { Container } from 'react-bootstrap'

// components
import { CardDiscovery } from './Components/CardDiscovery'
import { CardLearnMore } from './Components/CardLearnMore'
import { CardShop } from './Components/CardShop'

const Product = () => {
    return (
        <div className='product container'>
            <CardDiscovery />
            <br /><br /><br />
            <CardShop />
            <br /><br /><br />
            <CardLearnMore />
        </div>
    )
}


export default Product;