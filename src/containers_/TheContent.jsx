import React from 'react'
// views
import Carousel from 'src/views/carousel/Carousel'
import Product from 'src/views/product/Product'
import Found from 'src/views/found/Found'

const TheContent = () => {
  return (
    <div id='app-content'>
      <Carousel />
      <br/> <br/>
      <Product />
      <br/><br/>
      <Found />
    </div>
  )
}

export default TheContent