import React from 'react'
import TheContent from './TheContent'
import TheFooter from './TheFooter'
import TheHeader from './TheHeader'

const Layout = () => {
  return (
    <div>
      <TheHeader />
      <TheContent />
      <TheFooter/>
    </div>
  )
}

export default Layout