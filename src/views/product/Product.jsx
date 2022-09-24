import React from 'react'
import { Container } from 'react-bootstrap'

// Boostrap
// components
import { CardDiscovery } from './Components/CardDiscovery'
import { CardLearnMore } from './Components/CardLearnMore'
import { CardShop } from './Components/CardShop'

const Product = () => {
    return (
        <div className='product'>
            <Container>
                <CardDiscovery />
                <br /><br /><br />
                <CardShop />
                <br /><br /><br />
                <CardLearnMore />
            </Container >
        </div >
    )
}


export default Product;